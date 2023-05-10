import {Injectable} from "@nestjs/common";
import { SocketId } from 'socket.io-adapter';
import { Socket } from 'socket.io';

@Injectable()
export class UserService {
    private userConnected = new Map<string, SocketId>();

    public add(nick: string, socket: Socket): void {
        this.userConnected.set(nick, socket.id);
    }

    public remove(nick: string): void {
        this.userConnected.delete(nick);
    }

    public get(nick: string): SocketId {
        return this.userConnected.get(nick);
    }
}