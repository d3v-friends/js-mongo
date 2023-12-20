export type * from "./type";
import type { FnMigrate } from "./type";
import { Collection, Db, Document } from "mongodb";
export declare abstract class Docs<Doc extends object = Document> {
    abstract readonly colNm: string;
    abstract readonly migrate: FnMigrate<Document>[];
    abstract readonly db: Db;
    protected getCol(): Collection<Doc>;
}
