import { Collection } from "mongodb";
import type { IdxArgs } from "../type";
export declare function reindex(col: Collection<any>, { list }: IdxArgs): Promise<void>;
