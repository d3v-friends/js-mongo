import { Collection } from "mongodb";
import type { IdxArgs } from "../type";

export async function reindex(col: Collection<any>, { list }: IdxArgs): Promise<void> {
    await col.dropIndexes();
    for (let desc of list) {
        const [idx, opt] = desc;
        await col.createIndex(idx, opt);
    }
}
