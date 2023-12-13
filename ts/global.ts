import { Db } from "mongodb";
import connect, { ConnectArg } from "./connect";

export default class GlobalMongo {
    static readonly ins: GlobalMongo = new GlobalMongo();
    private db: Db | undefined | void | null;

    private constructor() {
    }

    public async connect(i: ConnectArg): Promise<Db> {
        this.db = await connect(i);
        return this.db;
    }

    public getDB(): Db {
        if (!this.db) throw new Error("not connected mongodb");
        return this.db;
    }
}
