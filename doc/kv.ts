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
    public readonly db: Db;

    constructor(db: Db, ...colNms: string[]) {
        super();
        this.db = db;
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

    public async get<Input>(key: string, ...defaults: Input[]): Promise<Input> {
        const col = this.getCol();
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

    public async set<Input>(key: string, value: Input) {
        const col = this.getCol();
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
