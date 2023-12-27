import { Collection, CreateIndexesOptions, IndexSpecification } from "mongodb";

export type IdsElem = [IndexSpecification, CreateIndexesOptions];

export type IdxArgs = {
    list: IdsElem[],
}

export async function reindex(col: Collection<any>, { list }: IdxArgs): Promise<void> {
    await col.dropIndexes();
    for (let desc of list) {
        const [idx, opt] = desc;
        await col.createIndex(idx, opt);
    }
}
