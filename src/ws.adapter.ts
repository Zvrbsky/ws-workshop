import {IoAdapter} from "@nestjs/platform-socket.io";
import {INestApplicationContext, WebSocketAdapter} from "@nestjs/common";
import {UserService} from "./user.service";
import { Server, ServerOptions, Socket } from 'socket.io';

export class UserConnectionAdapter extends IoAdapter implements WebSocketAdapter {
    public constructor(
        private readonly app: INestApplicationContext,
        private readonly userService: UserService,
    ) {
        super(app);
    }

    private server: Server;

    public create(port: number, options?: ServerOptions): Server {
        this.server = super.create(port, options);

        return this.server;
    }

    public bindClientConnect(server: Server, callback: (socket: Socket) => any): void {
        server.on('connection', (socket: Socket) => {
            const nick = socket.handshake.headers?.nick;
            if (typeof nick === 'string') {
                this.userService.add(nick, socket);

                socket.on('disconnect', () => {
                    this.userService.remove(nick);
                });
            }

            callback(socket);
        });
    }
}