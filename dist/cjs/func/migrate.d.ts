import { Db } from "mongodb";
import { Manager } from "../type";
export declare function migrate(db: Db, ...models: Manager<any>[]): Promise<void>;
