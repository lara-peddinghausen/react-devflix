import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();  // Permite que o NestJS execute os hooks de encerramento ao receber sinais de desligamento.

  await app.listen(
    process.env.PORT ?? 3000,
    '127.0.0.1',
  );
}

bootstrap();
