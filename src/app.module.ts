import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleOathStrategy } from './google-oath/google-oath.strategy';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, GoogleOathStrategy],
})
export class GoogleAuthModule {}
