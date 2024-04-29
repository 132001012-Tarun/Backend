import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Allow requests from this origin
    methods: ['POST'], // Allow only POST requests
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  });
  await app.listen(4000);
}
bootstrap();
