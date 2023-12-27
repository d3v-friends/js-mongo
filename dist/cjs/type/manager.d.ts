import { Collection, Db, Document } from "mongodb";
import { FnMigrate } from "./type";
export declare abstract class Manager<DATA extends Document = Document> {
    abstract readonly colNm: string;
    abstract readonly migrate: FnMigrate<DATA>[];
    protected getCol(db: Db): Collection<DATA>;
}
