import { Db } from "mongodb";
type ConnectArg = {
    host: string;
    username: string;
    password: string;
    database: string;
};
export default function ({ host, username, password, database }: ConnectArg): Promise<Db>;
export {};
