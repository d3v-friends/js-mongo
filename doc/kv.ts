import { Db, ObjectId } from "mongodb";
import { Docs, FnMigrate } from "@src/type";
import { fnErr, fnParam } from "@js-pure";

type Kv = {
    _id: ObjectId;
    key: string;
    value: string;
    updatedAt: Date;
}

export default class DocKv extends Docs<Kv> {
    public readonly colNm: string;
    public readonly migrate: FnMigrate<Kv>[];

    constructor(...colNms: string[]) {
        super();
        this.colNm = fnParam.string(colNms, "kvs");
        this.migrate = [
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
        ];
    }

    public async get<Input>(db: Db, key: string, ...defaults: Input[]): Promise<Input> {
        const col = this.getCol(db);
        const res = await col.findOne({ key });
        if (!res) {
            if (defaults.length === 0) {
                throw new fnErr.Error(fnErr.getMsg("not found kv", {
                    key,
                }), {
                    ko: "내부서버오류",
                });
            }

            await col.insertOne({
                _id: new ObjectId(),
                key,
                value: JSON.stringify(defaults[0]),
                updatedAt: new Date(),
            });

            return defaults[0];
        }

        return JSON.parse(res.value);
    }

    public async set<Input>(db: Db, key: string, value: Input) {
        const col = this.getCol(db);
        await col.updateOne(
            {
                key,
            },
            {
                $set: {
                    value: JSON.stringify(value),
                    updatedAt: new Date(),
                },
            });
    }
}
