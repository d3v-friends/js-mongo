import { Db } from "mongodb";

export type Memo = string;
export type FnMigrate = (db: Db) => Promise<Memo>;
export type ConnectArg = {
    host: string,
    username: string;
    password: string;
    database: string;
}
