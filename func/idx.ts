import { Collection, CreateIndexesOptions, IndexSpecification } from "mongodb";

export type IdxArgs = {
    list: [IndexSpecification, CreateIndexesOptions][],
}

export default async function(col: Collection<any>, { list }: IdxArgs): Promise<void> {
    await col.dropIndexes();
    for (let desc of list) {
        const [idx, opt] = desc;
        await col.createIndex(idx, opt);
    }
}
