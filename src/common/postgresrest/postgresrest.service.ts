/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, Logger } from '@nestjs/common';
import { PostgrestClient } from '@supabase/postgrest-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostgresRest {
  private readonly logger = new Logger(PostgresRest.name);
  private clientInstance: PostgrestClient;

  constructor(private readonly configService: ConfigService) {
    this.initializeClient();
    return new Proxy(this, {
      get: (target, prop: keyof PostgrestClient, receiver) => {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        }
        if (this.clientInstance && prop in this.clientInstance) {
          const value = this.clientInstance[prop];
          return typeof value === 'function'
            ? value.bind(this.clientInstance)
            : value;
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }

  private initializeClient() {
    this.logger.log('Initializing PostgREST client');
    const DB_REST_URL = this.configService.get<string>('PROD_DB_REST_URL');
    const SUPABASE_SERVICE_ROLE_KEY = this.configService.get<string>(
      'SUPABASE_SERVICE_ROLE_KEY',
    );
    if (!DB_REST_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      this.logger.error('NO Rest URL or role key provided');
      return;
    }
    this.clientInstance = new PostgrestClient(DB_REST_URL, {
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Accept-Profile': 'public',
        'Content-Profile': 'public',
      },
    });
    this.logger.log('Postgresrest client initialized');
  }

  public from(tableName: string) {
    return this.clientInstance.from(tableName);
  }

  public rpc(fnName: string, params?: object) {
    return this.clientInstance.rpc(fnName, params);
  }
}
