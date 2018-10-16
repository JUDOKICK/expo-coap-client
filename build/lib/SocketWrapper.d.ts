/// <reference types="node" />
import * as dgram from "react-native-udp";
import {EventEmitter} from "events";
import {dtls} from "react-native-dtls-client";
import {Origin} from "./Origin";
export declare class SocketWrapper extends EventEmitter {
    socket: dtls.Socket | dgram.Socket;
    private isDtls;
    private isClosed;
    constructor (socket: dtls.Socket | dgram.Socket);
    send (msg: Buffer, origin: Origin): void;
    close (): void;
}
