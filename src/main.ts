import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get<ConfigService>(ConfigService);
  
  console.log('APP_PORT', configService.get('APP_PORT'))
  console.log(configService.get('QDRANT_URL'))
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
