import { Db, ObjectId } from "mongodb";

type Base = {
    _id: ObjectId,
    mongoName: MangoName,
    createdAt: Date,
    updatedAt: Date,
}

type Index = Base & {
    memo: string[];
    nextIdx?: number;
}

const docMango = "mongos";
type MangoName = "migrate";


async function init(m: Db) {
    const col = m.collection<Base>(docMango);
    const idx = await col.indexExists("mongoName_1");
    if (idx) {
        return;
    }

    await col.createIndex({
        mongoName: 1,
    }, {
        name: "mongoName_1",
        unique: true,
    });
}

async function get<T extends { _id: ObjectId }>(m: Db, mongoName: MangoName): Promise<T> {
    const count = await m.collection(docMango).countDocuments({
        mongoName,
    });

    const now = new Date();
    if (count == 0) {
        await m.collection(docMango).insertOne({
            _id: new ObjectId(),
            mongoName,
            createdAt: now,
            updatedAt: now,
        });
    }

    return m.collection<any>(docMango).findOne({ mongoName });
}

type Memo = string;
export type FnMigrate = (db: Db) => Promise<Memo>;

export default async function migrate(m: Db, fns: FnMigrate[]): Promise<Index> {
    await init(m);
    const doc = await get<Index>(m, "migrate");
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

    return get<Index>(m, "migrate");
}
