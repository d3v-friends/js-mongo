import { Collection, Db, Document } from "mongodb";
import { FnMigrate } from "./type";


export abstract class Manager<Doc extends object = Document> {
    public readonly abstract colNm: string;
    public readonly abstract migrate: FnMigrate<Doc>[];

    protected getCol(db: Db): Collection<Doc> {
        return db.collection<Doc>(this.colNm);
    }
}
