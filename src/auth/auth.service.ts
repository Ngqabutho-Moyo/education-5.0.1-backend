/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import {
  Logger,
  Injectable,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { CrudService } from 'src/common/crud/crud.service';
import { ErrorResponseDto } from 'src/common/dto/error-response.dto';
import { GeneralErrorResponseDto } from 'src/common/dto/general-error-response.dto';
import { SuccessResponseDto } from 'src/common/dto/success-response.dto';
import { PostgresRest } from 'src/common/postgresrest/postgresrest.service';
import { AccessAccountDto, LoginDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcryptjs';
import * as CryptoJS from 'crypto-js';

function initLogger(funcname: Function): Logger {
  return new Logger(funcname.name);
}

@Injectable()
export class AuthService {
  private supabaseAdmin;
  private readonly logger = initLogger(AuthService);
  constructor(
    private readonly postgresrest: PostgresRest,
    private readonly jwtService: JwtService,
    private readonly crudService: CrudService,
  ) {
    this.supabaseAdmin = createClient(
      process.env.ENV == 'local'
        ? process.env.LOCAL_SUPABASE_URL || ''
        : process.env.SUPABASE_URL || '',
      process.env.ENV == 'local'
        ? process.env.LOCAL_SERVICE_ROLE_KEY || ''
        : process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    );
  }
  /*
  async validateUser(email: string, password: string): Promise<any> {
    // Query from auth.users schema
    this.logger.log('email', email);
    this.logger.log('password', password);

    const { data: user, error } = await this.postgresrest
      .from('users')
      .select('*')
      .eq('email', email)
      .limit(1)
      .single();

    if (error) throw new Error(`Auth user lookup failed: ${error.message}`);
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.encrypted_password);

    if (isValid) {
      const { encrypted_password, ...result } = user;
      return result;
    }
    return null;
  }
  */

  async validate_profile(accessAccountDto: AccessAccountDto) {
    try {
      this.logger.log(' validate_profile user.id', accessAccountDto);
      const decoded = this.jwtService.verify(accessAccountDto.accessToken);
      if (!decoded?.sub) {
        throw new UnauthorizedException('Invalid token');
      }

      // 2. Get user from auth.users
      const { data: user, error: userError } = await this.postgresrest
        .from('users')
        .select('id, email, role_id')
        .eq('id', decoded.sub)
        .single();

      if (userError || !user) {
        return {
          status: 'failed',
          message: 'User not found',
          access_token: null,
          error: userError,
          user: null,
        };
      }
      this.logger.log(' validate_profile user.id', user.id);
      // 3. Get profile with store information
      const { data: profileData, error: profileError } = await this.postgresrest
        .from('users') // Explicit schema
        .select()
        .eq('id', user.id)
        .single();

      if (profileError) {
        return {
          status: 'failed',
          message: 'User not found',
          access_token: null,
          error: profileError,
          user: null,
        };
      }

      const newPayload = {
        email: user.email,
        sub: user.id,
      };
      const newToken = this.jwtService.sign(newPayload);

      return {
        status: 'success',
        message: 'User retrieved successfully',
        access_token: newToken,
        user: {
          ...profileData,
          email: user.email,
        },
      };
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof NotFoundException
      ) {
        return {
          status: 'failed',
          message: 'User not found',
          access_token: null,
          error: error,
          user: null,
        };
      }
      return {
        status: 'failed',
        message: 'Failed to fetch profile',
        access_token: null,
        error: error,
        user: null,
      };
    }
  }

  async login(loginDto: LoginDto) {
    this.logger.log('Logging in', loginDto);
    try {
      // 1. First authenticate the user with email/password
      const {
        data: { user, session },
        error: authError,
      } = await this.supabaseAdmin.auth.signInWithPassword({
        email: loginDto.email,
        password: loginDto.password,
      });

      if (authError || !user) {
        this.logger.log({
          status: 'failed',
          message: 'Invalid credentials',
          access_token: null,
          error: authError,
          user: null,
          statusCode: 401,
        });
        return {
          status: 'failed',
          message: 'Invalid credentials',
          access_token: null,
          error: authError,
          user: null,
          statusCode: 401,
        };
      }

      // 2. Get additional user profile data if needed
      const { data: profileData, error: profileError } = await this.postgresrest
        .from(loginDto.account_type)
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) {
        this.logger.error('Failed to fetch profile data:', profileError);
        return new GeneralErrorResponseDto(
          400,
          'Faield to fetch profile data',
          profileError,
        );
      }

      const response = {
        status: 'account authenticated',
        statusCode: 200,
        message: 'account authenticated successfully',
        access_token: this.jwtService.sign({
          email: user.email,
          sub: user.id,
          role: user.role || 'authenticated',
        }),
        refresh_token: session?.refresh_token,
        token_type: 'bearer',
        user: profileData,
        error: null,
      };

      return response;
    } catch (error) {
      console.error('Login error:', error);
      if (error instanceof UnauthorizedException) {
        return {
          status: 'failed',
          data: null,
          error: {
            message: 'Invalid credentials',
            status: 401,
          },
        };
      }
      return {
        status: 'failed',
        data: null,
        error: {
          message: 'Login failed',
          status: 500,
        },
      };
    }
  }

  async signup(
    tableName: string,
    signupDto: object,
    code?: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      // this.logger.log('Creating user...', signupDto);
      const existingUser = await this.crudService.findOneByColumn(
        tableName,
        'email',
        signupDto['email'],
      );
      if (existingUser instanceof GeneralErrorResponseDto) {
        return existingUser;
      }

      if (existingUser.data) {
        // throw new UnauthorizedException('Email already in use');
        return new ErrorResponseDto(422, 'Email already in use');
      }

      // const hashedPassword = await bcrypt.hash(signupDto.password, 10);
      // const userId = uuidv4();

      // Create auth user in auth.users
      const { data: newAuthUser, error: authError } =
        await this.supabaseAdmin.auth.admin.createUser({
          email: signupDto['email'],
          password: signupDto['password'],
          email_confirm: true, // This skips the verification email
          user_metadata: {
            first_name: signupDto['first_name'],
            last_name: signupDto['last_name'],
          },
        });

      if (authError) {
        console.error('Auth creation error:', authError);
        // throw new Error(`User creation failed: ${authError.message}`);
        return new GeneralErrorResponseDto(
          400,
          'User creation failed',
          authError,
        );
      }

      // Verify we got a valid user ID
      if (!newAuthUser?.user?.id) {
        // throw new Error('Invalid user ID received from auth provider');
        return new GeneralErrorResponseDto(
          400,
          'Invalid user ID received from auth provider',
        );
      }

      const plainText = signupDto['password'];
      const secretKey = process.env.SECRET_KEY || 'No secret key';
      const cipherText = CryptoJS.AES.encrypt(plainText, secretKey);
      const decipheredBytes = CryptoJS.AES.decrypt(cipherText, secretKey);
      const decipheredText = decipheredBytes.toString(CryptoJS.enc.Utf8);
      this.logger.debug(
        `Plain text: ${plainText} Cipher text: ${cipherText.toString()}: Deciphered text: ${decipheredText}`,
      );

      // const now = new Date().toISOString();
      signupDto['id'] = newAuthUser.user.id;
      signupDto['password'] = cipherText.toString();
      signupDto['code'] = undefined;
      // this.logger.log(signupDto);

      // Create profile in public.profiles
      const userResponse = await this.crudService.create(
        tableName,
        signupDto,
        code,
      );
      if (userResponse instanceof GeneralErrorResponseDto) {
        return userResponse;
      }

      // Generate JWT
      const payload = {
        email: newAuthUser.user.email,
        sub: newAuthUser.user.id,
      };

      this.logger.log(payload);

      return new SuccessResponseDto(201, 'Account created successfully', {
        access_token: this.jwtService.sign(payload),
        user: userResponse.data,
        data: payload,
      });
    } catch (e) {
      console.error(e);
      return new ErrorResponseDto(500, e);
    }
  }

  async changePassword(
    cpDto: LoginDto,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      // Look for the user in the profiles table
      const user = await this.crudService.findOneByColumn(
        cpDto.account_type,
        'email',
        cpDto.email,
      );
      if (user instanceof GeneralErrorResponseDto) {
        return user;
      }

      // Update password
      const { data: update, error: updateError } =
        await this.supabaseAdmin.auth.admin.updateUserById(user.data.id, {
          password: cpDto.password,
        });
      if (updateError) {
        this.logger.error(
          `Failed to update password: ${JSON.stringify(updateError)}`,
        );
        return new GeneralErrorResponseDto(
          400,
          'Failed to update password',
          updateError,
        );
      }
      return new SuccessResponseDto(
        200,
        'Password updated successfully',
        update,
      );
    } catch (e) {
      this.logger.error(`changePassword error: ${e}`);
      return new GeneralErrorResponseDto(500, 'changePassword error', e);
    }
  }

  async getUsers(
    tableName: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      return await this.crudService.findAll(tableName);
    } catch (error) {
      console.error('Error in getUsers:', error);
      throw new Error(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while fetching profiles',
      );
    }
  }

  async getUser(
    tableName: string,
    profile_id: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      return await this.crudService.findOneByColumn(
        tableName,
        'id',
        profile_id,
      );
    } catch (error) {
      console.error('Error in getUsers:', error);
      throw new Error(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while fetching profiles',
      );
    }
  } /*
  async update(
    updateUserDto: LoginDto,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    // updateUserDto.updated_at = new Date().toISOString();
    this.logger.debug(
      `Resetting password using: ${JSON.stringify(updateUserDto)}`,
    );
    const { data: userData, error: userError } = await this.postgresrest
      .from('users')
      .select('id')
      .eq('email', updateUserDto.email)
      // .or(`phone.eq.${resetPasswordDto.phone}`)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    if (userError) {
      this.logger.error(
        `Error fetching email for password reset: ${JSON.stringify(userError)}`,
      );
      return new ErrorResponseDto(400, userError.details);
    }
    const { data, error } = await this.supabaseAdmin.auth.admin.updateUserById(
      userData.id,
      { password: updateUserDto.password },
    );
    if (error) {
      this.logger.error(`Error updating password, ${JSON.stringify(error)}`);
      return new ErrorResponseDto(400, error.details);
    }

    // Update profile
    const plainText = updateUserDto.password;
    const secretKey = process.env.SECRET_KEY || 'No secret key';
    const cipherText = CryptoJS.AES.encrypt(plainText, secretKey).toString();
    const decipheredBytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    const decipheredText = decipheredBytes.toString(CryptoJS.enc.Utf8);
    this.logger.debug(
      `Plain text: ${plainText} Cipher text: ${cipherText}: Deciphered text: ${decipheredText}`,
    );
    updateUserDto.password = cipherText.toString();
    const { data: update, error: updateError } = await this.postgresrest
      .from('users')
      .update({ password: updateUserDto.password })
      .eq('id', userData.id)
      .select()
      .single();

    if (updateError) {
      this.logger.error(
        `Error updating profile, ${JSON.stringify(updateError)}`,
      );
      return new ErrorResponseDto(400, updateError.details);
    }

    this.logger.log(`Password reset response: ${JSON.stringify(update)}`);

    // Create profile in public.profiles

    const { error: profileError } = await this.postgresrest
      .from('users')
      .update(updateUserDto)
      .eq('email', updateUserDto.email);

    if (profileError) {
      return new GeneralErrorResponseDto(
        400,
        'Failed to update user',
        profileError,
      );
    }
    return new SuccessResponseDto(
      200,
      'Account updated successfully',
      updateUserDto,
    );
  }
  */

  async logout(userId: string) {
    try {
      // 1. Validate the user ID format
      if (!this.isValidUuid(userId)) {
        throw new BadRequestException('Invalid user ID format');
      }

      // 2. First get the current user session to verify
      const {
        data: { user },
        error: userError,
      } = await this.supabaseAdmin.auth.admin.getUserById(userId);

      if (userError || !user) {
        throw new UnauthorizedException('User not found');
      }

      // 3. Invalidate ALL sessions for this user
      // const { error: authError } =
      //   await this.supabaseAdmin.auth.admin.signOut(userId);
      const { error: authError } = await this.supabaseAdmin.auth.signOut();

      if (authError) {
        throw new Error(`Session invalidation failed: ${authError.message}`);
      }

      // 4. Clear local profile data (optional)
      /*
      const now = new Date().toISOString();
      await this.postgresrest
        .from('users')
        .update({ push_token: null, updated_at: now })
        .eq('id', userId);
        */

      return {
        status: 'success',
        message: 'Logged out successfully',
        error: null,
      };
    } catch (error) {
      console.error('Logout error:', error);
      throw new HttpException(
        error instanceof Error ? error.message : 'Logout failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private isValidUuid(uuid: string): boolean {
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return regex.test(uuid);
  }
}
