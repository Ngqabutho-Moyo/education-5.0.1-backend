/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerCustomOptions,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .addBasicAuth()
    // .addServer('https://dms.prodairyims.co.zw/api', 'Production')
    .setTitle('Education 5.0.1 Docs')
    .setDescription('Education 5.0.1 API Documentation')
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
    ignoreGlobalPrefix: false,
  };

  const document = SwaggerModule.createDocument(app as any, config, options);

  // Custom Swagger UI configuration for alphabetical sorting
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
      operationsSorter: 'alpha', // Sort operations alphabetically
      tagsSorter: 'alpha', // Sort tags alphabetically
    },
    customSiteTitle: 'Education 5.0.1 Docs',
  };

  SwaggerModule.setup('docs/api', app as any, document, customOptions);

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true, // remove non-whitelisted properties
  //     forbidNonWhitelisted: true, // throw errors for non-whitelisted properties
  //     transform: true, // automatically transform payloads to DTO instances
  //   }),
  // );

  await app.listen(process.env.PORT ?? 3001, '0.0.0.0', () => {
    console.log(
      `server connected, running on port ${process.env.PORT ?? 3001}`,
    );
  });
}
void bootstrap();
