import {INestApplicationContext, Injectable} from "@nestjs/common";
import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {UserService} from "./user.service";
import {SendMessageDto} from "./send-message.dto";
import {Server, Socket} from "socket.io";

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
    ) {}
    @SubscribeMessage('send')
    handleEvent(@MessageBody() messageDto: SendMessageDto, @ConnectedSocket() socket: Socket): void {
        this.server.to(this.userService.get(messageDto.to)).emit('received', {from: socket.handshake.headers.nick, text: messageDto.text});
    }
}

