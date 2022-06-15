import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService, 
    {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
    }
  ],
})
export class AppModule {}

// Interceptor: before sending the response to the client
// it's going to be intercepting it and look at DTO and modify that response 
// after sending it to the client response
