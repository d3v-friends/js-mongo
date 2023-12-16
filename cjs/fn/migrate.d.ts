import { Db } from "mongodb";
import { Schema } from "../type";
export default function migrate(db: Db, ...models: Schema<any>[]): Promise<void>;
