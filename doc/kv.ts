import { fnErr } from "@js-pure";
import { Schema } from "@src/type";
import { Collection, Db, ObjectId } from "mongodb";

type Kv = {
    _id: ObjectId;
    key: string;
    value: string;
    updatedAt: Date;
};

const colNm = "kvs";

const fn = {
    col: (db: Db): Collection<Kv> => db.collection<Kv>(colNm),
    get: async <RES extends object | string | number | boolean>(db: Db, key: string, ...defaults: RES[]) => {
        const col = fn.col(db);
        const res = await col.findOne({ key });
        if (!res) {
            if (defaults.length === 0) {
                throw new fnErr.Error(`not found key value: key=${key}`, {
                    ko: `KV 조회 실패: key=${key}`,
                });
            }

            await col.insertOne({
                _id: new ObjectId(),
                key: key,
                value: JSON.stringify(defaults[0]),
                updatedAt: new Date(),
            });

            return defaults[0];
        }
        return JSON.parse(res.value) as RES;
    },
    getString: async (db: Db, key: string, ...defaults: string[]) => {
        return fn.get<string>(db, key, ...defaults);
    },
    getInt: async (db: Db, key: string, ...defaults: number[]) => {
        if (defaults.length === 0) {
            return parseInt(await fn.getString(db, key));
        } else {
            return parseInt(await fn.getString(db, key, `${defaults[0]}`));
        }
    },
    getBool: async (db: Db, key: string, ...defs: boolean[]) => {
        return fn.get<boolean>(db, key, ...defs);
    },
    set: async <RES extends object | string | number | boolean>(db: Db, key: string, value: RES) => {
        await fn.col(db).updateOne(
            {
                key,
            },
            {
                $set: {
                    value: JSON.stringify(value),
                    updatedAt: new Date(),
                },
            },
            {
                upsert: true,
            },
        );
    },
    getAndSet: async <RES extends object | string | number | boolean>(db: Db, key: string, prev: RES, next: RES) => {
        const res = await fn.col(db).findOneAndUpdate(
            {
                key,
                value: JSON.stringify(prev),
            },
            {
                $set: {
                    value: JSON.stringify(next),
                    updatedAt: new Date(),
                },
            },
        );

        if (!res) {
            throw new fnErr.Error(
                fnErr.getMsg("not found key_value", {
                    key,
                }),
                {
                    ko: `KV 에서 이전 데이터를 찾지 못하였습니다: key=${key}`,
                },
            );
        }

        return next;
    },
    has: async (db: Db, key: string): Promise<boolean> => {
        const count = await fn.col(db).countDocuments({ key });
        return 0 < count;
    },
};

const doc: Schema<Kv> & typeof fn = {
    colNm,
    migrate: [
        async col => {
            await col.createIndex(
                {
                    key: 1,
                },
                {
                    unique: true,
                },
            );
        },
    ],
    ...fn,
};

export default doc;
