import { Module } from '@nestjs/common';
import {AppGateway} from "./app.gateway";
import {UserService} from "./user.service";
import {RabbitMQModule} from "@golevelup/nestjs-rabbitmq";

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'chat',
          type: 'topic',
        },
      ],
      uri: 'amqp://rabbitmq:5672',
      connectionInitOptions: { wait: false },
      enableControllerDiscovery: true,
    }),
  ],
  providers: [AppGateway, UserService],
})
export class AppModule {}
