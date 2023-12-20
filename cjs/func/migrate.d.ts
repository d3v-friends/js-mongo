import { Db } from "mongodb";
import { Docs } from "../type";
export default function (db: Db, ...models: Docs[]): Promise<void>;
