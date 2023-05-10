import {INestApplicationContext, Injectable} from "@nestjs/common";
import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {UserService} from "./user.service";
import {SendMessageDto} from "./send-message.dto";
import {Server, Socket} from "socket.io";
import {AmqpConnection, RabbitSubscribe} from "@golevelup/nestjs-rabbitmq";
import {ForwardMessageInterface} from "./forward-message.interface";
import { v4 as uuidv4 } from 'uuid';

@WebSocketGateway({
    namespace: 'chat',
    transports: ['websocket'],
})
@Injectable()
export class AppGateway {
    @WebSocketServer()
    server: Server;
    public constructor(
        private readonly userService: UserService,
        private readonly amqpConnection: AmqpConnection
    ) {}
    @SubscribeMessage('send')
    async handleEvent(@MessageBody() messageDto: SendMessageDto, @ConnectedSocket() socket: Socket): Promise<void> {
        console.log("Forwarding message: ", messageDto);
        await this.amqpConnection.publish('chat', 'sent-to-websocket', {
            to: messageDto.to,
            eventType: 'received',
            data: {
                from: socket.handshake.headers.nick,
                text: messageDto.text
            }
        });
    }

    @RabbitSubscribe({
        exchange: 'chat',
        routingKey: 'sent-to-websocket',
        queue: uuidv4(),
    })
    public sentToWebsocket(msg: ForwardMessageInterface): void {
        const receiver = this.userService.get(msg.to);
        if (receiver) {
            console.log(`Received message: ${JSON.stringify(msg)}`);
            this.server.to(receiver).emit(msg.eventType, msg.data);
        }
    }
}

