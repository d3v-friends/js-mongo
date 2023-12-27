import { Connection, Schema } from "mongoose";
import { FnMigrate } from "./type";

export abstract class Manager<T> {
    public abstract readonly schema: Schema<T>;
    public abstract readonly colNm: string;
    public abstract readonly migrate: FnMigrate<T>[];

    public model(conn: Connection) {
        return conn.model(this.colNm, this.schema);
    }
}
