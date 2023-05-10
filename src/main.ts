import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {initWsAdapters} from "./ws-adapter.init";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  initWsAdapters(app);

  await app.listen(3000);
}
bootstrap();
