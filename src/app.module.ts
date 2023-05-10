import { Module } from '@nestjs/common';
import {AppGateway} from "./app.gateway";
import {UserService} from "./user.service";

@Module({
  imports: [],
  providers: [AppGateway, UserService],
})
export class AppModule {}
