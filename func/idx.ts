import { Collection, IndexSpecification } from "mongodb";

export type IdxArgs = {
    list: IndexSpecification[],
}

export default async function(col: Collection<any>, { list }: IdxArgs): Promise<void> {
    await col.dropIndexes();
    for (let desc of list) {
        await col.createIndex(desc);
    }
}
