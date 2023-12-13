import { Db, ObjectId } from "mongodb";

type Base = {
    _id: ObjectId,
    name: MangoName,
    createdAt: Date,
    updatedAt: Date,
}

type DocMigrate = Base & {
    memo: string[];
    nextIdx?: number;
}

export const docMango = "mangos";
export type MangoName = "migrate";


async function init(m: Db) {
    const ls = await m.collection(docMango).listIndexes();
    if (await ls.hasNext()) {
        const idx = await ls.next();
        //todo

        throw new Error("not impl");
    }
}

async function get<T extends { _id: ObjectId }>(m: Db, name: MangoName): Promise<T> {
    const count = await m.collection(docMango).countDocuments({
        name,
    });

    const now = new Date();
    if (count == 0) {
        await m.collection(docMango).insertOne({
            _id: new ObjectId(),
            name,
            createdAt: now,
            updatedAt: now,
        });
    }

    return m.collection<any>(docMango).findOne({ name });
}

type Memo = string;
export type FnMigrate = (db: Db) => Promise<Memo>;

export default async function migrate(m: Db, fns: FnMigrate[]): Promise<DocMigrate> {
    await init(m);
    const doc = await get<DocMigrate>(m, "migrate");
    doc.nextIdx = doc.nextIdx || 0;

    for (let i = doc.nextIdx; i < fns.length; i++) {
        const fn = fns[i];

        const memo = await fn(m);
        await m.collection(docMango).updateOne(
            {
                _id: doc._id,
            },
            {
                $set: {
                    updatedAt: new Date(),
                },
                $push: {
                    memo,
                },
                $inc: {
                    nextIdx: 1,
                },
            });

    }

    return get<DocMigrate>(m, "migrate");
}
