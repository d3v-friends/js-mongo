import { Collection, Db, Document } from "mongodb";
import { FnMigrate } from "./type";


export abstract class Manager<DOC extends Document = Document> {
    public readonly abstract colNm: string;
    public readonly abstract migrate: FnMigrate<DOC>[];

    protected getCol(db: Db): Collection<DOC> {
        return db.collection<DOC>(this.colNm);
    }
}
