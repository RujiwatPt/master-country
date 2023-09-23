import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SwaggerModule } from '@nestjs/swagger';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rujiwat:masterCountry@mastercountry.x4lijzu.mongodb.net/?retryWrites=true&w=majority',
    ),
    SwaggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
