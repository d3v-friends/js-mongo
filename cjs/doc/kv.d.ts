import { Collection, Db, ObjectId } from "mongodb";
import { Schema } from "../type";
type Kv = {
    _id: ObjectId;
    key: string;
    value: string;
    updatedAt: Date;
};
declare const fn: {
    col: (db: Db) => Collection<Kv>;
    get: <RES extends string | number | boolean | object>(db: Db, key: string, ...defaults: RES[]) => Promise<RES>;
    getString: (db: Db, key: string, ...defaults: string[]) => Promise<string>;
    getInt: (db: Db, key: string, ...defaults: number[]) => Promise<number>;
    getBool: (db: Db, key: string, ...defs: boolean[]) => Promise<boolean>;
    set: <RES_1 extends string | number | boolean | object>(db: Db, key: string, value: RES_1) => Promise<void>;
    getAndSet: <RES_2 extends string | number | boolean | object>(db: Db, key: string, prev: RES_2, next: RES_2) => Promise<RES_2>;
    has: (db: Db, key: string) => Promise<boolean>;
};
declare const doc: Schema<Kv> & typeof fn;
export default doc;
