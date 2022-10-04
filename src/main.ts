import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const logger = new Logger(AppModule.name);
  const configService = new ConfigService();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // removes invalid values from post/requests
    }),
  );
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const config = new DocumentBuilder()
    .setTitle('Secret Coffee Machine')
    .setDescription(
      'I love it when the coffee kicks in and I realize what an badass Ninja I\'m going to be today.'
    )
    .setVersion('1.0')
    .addOAuth2(
      {
        type: 'oauth2',
        flows: {
          implicit: {
            authorizationUrl: `${configService.get(
              'AUTH0_DOMAIN',
            )}authorize?audience=${configService.get('AUTH0_AUDIENCE')}`,
            tokenUrl: configService.get('AUTH0_AUDIENCE'),
            scopes: {
              openid: 'Open Id',
              profile: 'Profile',
              email: 'E-mail',
            },
          },
        },
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'Auth0',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      oauth: {
        // this will pre-fill the client id in the Swagger authorization form
        clientId: configService.get('AUTH0_OAUTH_CLIENT_ID'),
      },
    },
  });

  await app.listen(configService.get('PORT'));

  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
