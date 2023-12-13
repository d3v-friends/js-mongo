import { Db } from "mongodb";
export type ConnectArg = {
    host: string;
    username: string;
    password: string;
    database: string;
};
export default function connect(i: ConnectArg): Db;
