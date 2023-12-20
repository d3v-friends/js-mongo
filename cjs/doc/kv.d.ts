import { Db, ObjectId } from "mongodb";
import { Docs, FnMigrate } from "../type";
export interface Kv {
    _id: ObjectId;
    key: string;
    value: string;
    updatedAt: Date;
}
export default class DocKv extends Docs<Kv> {
    readonly colNm: string;
    readonly migrate: FnMigrate<Kv>[];
    readonly db: Db;
    constructor(db: Db, ...colNms: string[]);
    get<Input>(key: string, ...defaults: Input[]): Promise<Input>;
    set<Input>(key: string, value: Input): Promise<void>;
}
