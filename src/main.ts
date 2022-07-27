import { NestFactory } from '@nestjs/core';
import { GoogleAuthModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(GoogleAuthModule);
  await app.listen(3000);
}
bootstrap();
