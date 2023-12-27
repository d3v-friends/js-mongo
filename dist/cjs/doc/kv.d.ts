import { Db } from "mongodb";
import { Manager, FnMigrate, Kv } from "../type";
export declare class KvManager extends Manager<Kv> {
    readonly colNm: string;
    readonly migrate: FnMigrate<Kv>[];
    constructor(...colNms: string[]);
    get<Input>(db: Db, key: string, ...defaults: Input[]): Promise<Input>;
    set<Input>(db: Db, key: string, value: Input): Promise<void>;
}
