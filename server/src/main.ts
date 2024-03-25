import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap')

  const port = 3001;

  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  logger.log(`application started at port: ${port}`)
}
bootstrap();
