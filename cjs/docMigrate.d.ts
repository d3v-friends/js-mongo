import { Db, ObjectId } from "mongodb";
type Base = {
    _id: ObjectId;
    name: MangoName;
    createdAt: Date;
    updatedAt: Date;
};
type DocMigrate = Base & {
    memo: string[];
    nextIdx?: number;
};
export declare const docMango = "mangos";
export type MangoName = "migrate";
type Memo = string;
export type FnMigrate = (db: Db) => Promise<Memo>;
export default function migrate(m: Db, fns: FnMigrate[]): Promise<DocMigrate>;
export {};
