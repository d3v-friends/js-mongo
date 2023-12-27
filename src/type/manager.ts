import { Collection, Db, Document } from "mongodb";
import { FnMigrate } from "./type";


export abstract class Manager<Doc extends object = Document> {
    public readonly abstract colNm: string;
    public readonly abstract migrate: FnMigrate<Doc>[];
    public readonly abstract db: Db;

    protected getCol(): Collection<Doc> {
        return this.db.collection<Doc>(this.colNm);
    }
}
