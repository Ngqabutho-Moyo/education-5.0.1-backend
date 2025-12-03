/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { Logger, Injectable } from '@nestjs/common';
import { PostgresRest } from '../postgresrest/postgresrest.service';
import { GeneralErrorResponseDto } from '../dto/general-error-response.dto';
import { SuccessResponseDto } from '../dto/success-response.dto';

function initLogger(funcname: Function) {
  return new Logger(funcname.name);
}

@Injectable()
export class CrudService {
  private readonly logger = initLogger(CrudService);
  constructor(private readonly postgresrest: PostgresRest) {}

  async create(
    tableName: string,
    createDto: object,
    code?: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      // Generate code
      if (code) {
        const record = await this.findMostRecent(tableName);
        if (record instanceof GeneralErrorResponseDto) {
          return record;
        }
        if (record instanceof GeneralErrorResponseDto) {
          return record;
        }
        if (record.data === null) {
          createDto['code'] =
            `${code}-1-${new Date().getDate()}-${new Date().getUTCMonth() + 1}-${new Date().getFullYear()}`;
        } else {
          const recentCode = record?.data.code ?? null;
          if (!record || !recentCode) {
            createDto['code'] =
              `${code}-1-${new Date().getDate()}-${new Date().getUTCMonth() + 1}-${new Date().getFullYear()}`;
          } else if (
            new Date(record.data.created_at).toDateString() ===
            new Date().toDateString()
          ) {
            let recordNumber = Number(recentCode.toString().split('-')[1]);
            this.logger.debug(recordNumber);
            createDto['code'] =
              `${code}-${++recordNumber}-${new Date().getDate()}-${new Date().getUTCMonth() + 1}-${new Date().getFullYear()}`;
          } else {
            createDto['code'] =
              `${code}-1-${new Date().getDate()}-${new Date().getUTCMonth() + 1}-${new Date().getFullYear()}`;
          }
        }
      }
      // Insert record
      const { data, error } = await this.postgresrest
        .from(tableName)
        .insert(createDto)
        .select()
        .single();
      if (error) {
        this.logger.error(
          `Failed to insert into ${tableName}`, error
        );
        return new GeneralErrorResponseDto(
          400,
          `Failed to insert into ${tableName}`,
        );
      }
      this.logger.debug(`INSERT INTO ${tableName} successful`);
      return new SuccessResponseDto(
        201,
        `INSERT INTO ${tableName} successful`,
        data as object,
      );
    } catch (error) {
      this.logger.error(`Failed to insert into ${tableName} ${error}`);
      return new GeneralErrorResponseDto(
        500,
        `Failed to insert into ${tableName}`,
      );
    }
  }

  async findAll(
    tableName: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      const { data, error } = await this.postgresrest
        .from(tableName)
        .select()
        .order('created_at', { ascending: false });
      if (error) {
        this.logger.error(
          `Error fetching all from ${tableName}: ${JSON.stringify(error)}`,
        );
        return new GeneralErrorResponseDto(400, JSON.stringify(error));
      }
      return new SuccessResponseDto(
        200,
        `SELECT * FROM ${tableName} successful`,
        data,
      );
    } catch (error) {
      this.logger.error(`findAll error: ${error}`);
      return new GeneralErrorResponseDto(500, error);
    }
  }

  async findAllByColumn(
    tableName: string,
    columnName: string,
    value: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      const { data, error } = await this.postgresrest
        .from(tableName)
        .select()
        .eq(`${columnName}`, value)
        .order('created_at', { ascending: false });
      if (error) {
        this.logger.error(
          `Error fetching all from ${tableName} by ${columnName}: ${JSON.stringify(error)}`,
        );
        return new GeneralErrorResponseDto(400, JSON.stringify(error));
      }
      return new SuccessResponseDto(
        200,
        `SELECT * FROM ${tableName} where ${columnName}=${value} successful`,
        data,
      );
    } catch (error) {
      this.logger.error(`findAllByColumn error: ${error}`);
      return new GeneralErrorResponseDto(500, error);
    }
  }

  async findOne(
    tableName: string,
    id: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      const { data, error } = await this.postgresrest
        .from(tableName)
        .select()
        .eq('id', id)
        .single();
      if (error) {
        this.logger.error(
          `Error fetching one from ${tableName}: ${JSON.stringify(error)}`,
        );
        return new GeneralErrorResponseDto(400, JSON.stringify(error));
      }
      return new SuccessResponseDto(
        200,
        `SELECT * FROM ${tableName} WHERE id=${id} successful`,
        data as object,
      );
    } catch (error) {
      this.logger.error(`findOne error: ${error}`);
      return new GeneralErrorResponseDto(500, error);
    }
  }

  async findMostRecent(
    tableName: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      const { data, error } = await this.postgresrest
        .from(tableName)
        .select()
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      if (error && error.code != 'PGRST116') {
        this.logger.error(
          `Error fetching most recent from ${tableName}: ${JSON.stringify(error)}`,
        );
        return new GeneralErrorResponseDto(400, JSON.stringify(error));
      }
      return new SuccessResponseDto(
        200,
        `SELECT * FROM ${tableName} LIMIT 1 ORDER BY created_at DESC successful`,
        data as object,
      );
    } catch (error) {
      this.logger.error(`findMostRecent error: ${error}`);
      return new GeneralErrorResponseDto(500, error);
    }
  }

  async findOneByColumn(
    tableName: string,
    columnName: string,
    value: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      const { data, error } = await this.postgresrest
        .from(tableName)
        .select()
        .eq(`${columnName}`, value)
        .limit(1)
        .single();
      if (error && error.code != 'PGRST116') {
        this.logger.error(
          `Error fetching one from ${tableName} by ${columnName}: ${JSON.stringify(error)}`,
        );
        return new GeneralErrorResponseDto(400, JSON.stringify(error));
      }
      return new SuccessResponseDto(
        200,
        `SELECT * FROM ${tableName} WHERE ${columnName}=${value} successful`,
        data as object,
      );
    } catch (error) {
      this.logger.error(`findOneByColumn error: ${error}`);
      return new GeneralErrorResponseDto(500, error);
    }
  }

  async update(
    tableName: string,
    updateDto: object,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      // this.logger.warn(updateDto);
      updateDto['updated_at'] = new Date();

      // Maintain the same code
      const record = await this.findOne(tableName, updateDto['id']);
      if (record instanceof GeneralErrorResponseDto) {
        return record;
      }
      updateDto['code'] = record.data.code;
      const { data, error } = await this.postgresrest
        .from(tableName)
        .update(updateDto)
        .eq('id', updateDto['id'])
        .select()
        .single();
      if (error) {
        this.logger.error(
          `Error updating ${tableName}: ${JSON.stringify(error)}`,
        );
        return new GeneralErrorResponseDto(400, JSON.stringify(error));
      }
      this.logger.debug(
        `UPDATE ${tableName} WHERE id=${updateDto['id']} successful`,
      );
      return new SuccessResponseDto(
        200,
        `UPDATE ${tableName} successful`,
        data as object,
      );
    } catch (error) {
      return new GeneralErrorResponseDto(500, error);
    }
  }

  async updateByColumn(
    tableName: string,
    columnName: string,
    value: any,
    updateDto: object,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      updateDto['updated_at'] = new Date();
      this.logger.debug(
        `Updating ${tableName} by ${columnName}:\n${JSON.stringify(updateDto)}`,
      );
      const { data, error } = await this.postgresrest
        .from(tableName)
        .update(updateDto)
        .eq(`${columnName}`, value)
        .select()
        .single();
      if (error) {
        this.logger.error(
          `Error updating ${tableName} by ${columnName}: ${JSON.stringify(error)}`,
        );
        return new GeneralErrorResponseDto(400, JSON.stringify(error));
      }

      return new SuccessResponseDto(
        200,
        `UPDATE ${tableName} successful`,
        data as object,
      );
    } catch (error) {
      return new GeneralErrorResponseDto(500, error);
    }
  }

  async updateMostRecent(
    tableName: string,
    columnName: string,
    value: string,
    updateDto: object,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    try {
      this.logger.debug(tableName, columnName, value, updateDto);
      // Select most recent record
      // First, find the ID of the most recent record
      const { data: latestRecord, error: findError } = await this.postgresrest
        .from(tableName)
        .select('id')
        .eq(`${columnName}`, value)
        .order('updated_at', { ascending: false })
        .limit(1)
        .single();

      if (findError) {
        this.logger.error('Failed to fetch latest record', findError);
        return new GeneralErrorResponseDto(
          400,
          'Failed to fetch latest record',
          findError,
        );
      }

      if (latestRecord) {
        // Then update ONLY that specific record by ID
        const { data, error } = await this.postgresrest
          .from(tableName)
          .update(updateDto)
          .eq('id', latestRecord.id) // Use the unique ID
          .select()
          .single();
        if (error) {
          this.logger.error(
            `Failed to update ${tableName}: ${JSON.stringify(error)}`,
          );
          return new GeneralErrorResponseDto(
            400,
            `Failed to update ${tableName}'s most recent record: ${error.toString()}`,
            error,
          );
        }
        this.logger.debug(
          `${tableName}'s most recent record updated successfully: ${JSON.stringify(data)}`,
        );
      }
      this.logger.debug(
        `UPDATE ${tableName} SET ${columnName}=${value} LIMIT 1 successful`,
      );
      return new SuccessResponseDto(
        200,
        `${tableName}'s most recent record updated successfully`,
      );
    } catch (e) {
      this.logger.error('updateMostRecent error', e);
      return new GeneralErrorResponseDto(500, 'updateMostRecent error', e);
    }
  }

  async delete(
    tableName: string,
    id: string,
  ): Promise<SuccessResponseDto | GeneralErrorResponseDto> {
    const { data, error } = await this.postgresrest
      .from(tableName)
      .delete()
      .eq('id', id)
      .select()
      .single();
    if (error) {
      return new GeneralErrorResponseDto(400, JSON.stringify(error));
    }
    return new SuccessResponseDto(
      201,
      `DELETE FROM ${tableName} WHERE id=${id} successful`,
      data as object,
    );
  }
}
