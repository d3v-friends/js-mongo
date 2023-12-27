import { Db } from "mongodb";
import { ConnectArg } from "../type";
type ConnFactory = () => Promise<Db>;
export declare const fnConn: {
    connect: ({ host, username, password, database, opts }: ConnectArg) => Promise<Db>;
    connectionFactory: (v: ConnectArg) => ConnFactory;
};
export {};
