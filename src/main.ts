import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // make sure to get only the property defined in data
    transform:  true,
    transformOptions:  {
      enableImplicitConversion: true
    }
  })); // enable global pipe
  await app.listen(3000);
}
bootstrap();
