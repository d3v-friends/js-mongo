import { Collection, Db, Document } from "mongodb";
import { FnMigrate } from "./type";


export abstract class Manager<DATA extends Document = Document> {
    public readonly abstract colNm: string;
    public readonly abstract migrate: FnMigrate<DATA>[];

    protected getCol(db: Db): Collection<DATA> {
        return db.collection<DATA>(this.colNm);
    }
}
