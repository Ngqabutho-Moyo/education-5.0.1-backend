import { Controller, Get, Param, Post, Body, HttpException, Query } from "@nestjs/common";
import { ApiExcludeEndpoint, ApiOperation, ApiBody, ApiResponse, ApiParam, ApiTags, ApiQuery } from "@nestjs/swagger";
import { UnauthorizedResponseDto, ServerErrorResponseDto, GeneralErrorResponseDto } from "src/common/dto/general-error-response.dto";
import { AuthService } from "./auth.service";
import { LoginDto, AccessAccountDto } from "./dto/create-auth.dto";
import { ErrorResponseDto } from "src/common/dto/error-response.dto";

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiExcludeEndpoint()
  @Get('profiles')
  @ApiQuery({
    name: 'account_type',
    description: 'user account type'
  })
  async getUsers(@Query('account_type') account_type: string) {
    const response = await this.authService.getUsers(account_type);
    if(response instanceof GeneralErrorResponseDto || response instanceof ErrorResponseDto){
      return new HttpException(response, response.statusCode);
    }
    return response;
  }
  /*
  @ApiExcludeEndpoint()
  @Get('profiles/:id')
  async getUser(@Param('id') id: string) {
    console.log('AuthGuard works 🎉');
    return await this.authService.getUser(id);
  }
  */

  @ApiOperation({ summary: 'Create account' })
  @ApiBody({ type: Object })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    type: Object,
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
    type: UnauthorizedResponseDto,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: ServerErrorResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
    type: GeneralErrorResponseDto,
  })
  @Post('create-account')
  async signup(@Query('account_type') account_type: string, @Body() signupDto: object) {
    const response = await this.authService.signup(account_type, signupDto);
    if(response instanceof GeneralErrorResponseDto || response instanceof ErrorResponseDto){
      return new HttpException(response, response.statusCode);
    }
    return response;
  }
  /*
  @ApiExcludeEndpoint()
  @Patch('update-account')
  async update(@Body() updateUserDto: LoginDto) {
    return this.authService.update(updateUserDto);
  }
  */

  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiOperation({
    summary: 'Login user',
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    type: Object,
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
    type: Object,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: Object,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
    type: Object,
  })
  async login(@Body() loginDto: LoginDto) {
    const response =  await this.authService.login(loginDto);
    if(response instanceof GeneralErrorResponseDto || response instanceof ErrorResponseDto){
      return new HttpException(response, response.statusCode);
    }
    return response;
  }

  @Post('change-password')
  @ApiBody({ type: LoginDto })
  @ApiOperation({
    summary: 'Change password',
  })
  @ApiResponse({
    status: 200,
    description: 'Password updated successfully',
    type: Object,
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
    type: Object,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: Object,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
    type: Object,
  })
  async changePassword(@Body() cpDto: LoginDto) {
    const response = await this.authService.changePassword(cpDto);
    if (response instanceof GeneralErrorResponseDto) {
      throw new HttpException(
        response,
        response.statusCode
      );
    }
    return response;
  }

  @ApiOperation({
    summary: 'Logout user',
  })
  @ApiResponse({
    status: 200,
    description: 'Logout successful',
    type: undefined,
  })
  @ApiParam({
    name: 'id',
  })
  @Post('logout/:id')
  async logout(@Param('id') id: string) {
    const response = await this.authService.logout(id);
    if(response instanceof GeneralErrorResponseDto || response instanceof ErrorResponseDto){
      return new HttpException(response, response.statusCode);
    }
    return response;
  }

  @ApiExcludeEndpoint()
  @Post('validate-profile')
  async validate_profile(@Body() accessToken: AccessAccountDto) {
    return this.authService.validate_profile(accessToken);
  }
}