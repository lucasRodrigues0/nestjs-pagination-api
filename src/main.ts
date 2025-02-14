import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://bucolic-rolypoly-c16e19.netlify.app/',
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
