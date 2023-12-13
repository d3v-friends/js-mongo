import { Db } from "mongodb";
import { ConnectArg } from "./connect";
export default class GlobalMongo {
    static readonly ins: GlobalMongo;
    private db;
    private constructor();
    connect(i: ConnectArg): Promise<Db>;
    getDB(): Db;
}
