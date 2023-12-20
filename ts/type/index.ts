export type * from "./type";
import type { FnMigrate } from "./type";
import { Collection, Db, Document } from "mongodb";


export abstract class Docs<Doc extends object = Document> {
    public readonly abstract colNm: string;
    public readonly abstract migrate: FnMigrate<Document>[];
    public readonly abstract db: Db;

    protected getCol(): Collection<Doc> {
        return this.db.collection<Doc>(this.colNm);
    }
}
