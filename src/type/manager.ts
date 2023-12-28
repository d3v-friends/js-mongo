import { Connection, Schema } from "mongoose";
import { FnMigrate, MongooseModel } from "@src/type";

export abstract class Manager<T> {
    protected constructor(
        public readonly colNm: string,
        public readonly schema: Schema<T>,
        public readonly migrate: FnMigrate<T>[],
    ) {}

    public model(conn: Connection): MongooseModel<T> {
        return conn.model(this.colNm, this.schema);
    }
}
