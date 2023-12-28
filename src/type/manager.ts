import { Connection, Schema } from "mongoose";
import { FnMigrate, MongooseModel } from "@src/type";

export abstract class Manager<T> {
    public abstract readonly schema: Schema<T>;
    public abstract readonly colNm: string;
    public abstract readonly migrate: FnMigrate<T>[];

    protected constructor() {}

    public model(conn: Connection): MongooseModel<T> {
        return conn.model(this.colNm, this.schema);
    }
}
