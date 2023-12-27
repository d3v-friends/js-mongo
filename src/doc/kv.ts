import { fnParam, JsError } from "@js-pure";
import { Db, ObjectId } from "mongodb";
import { Manager, FnMigrate, Kv } from "../type";

export class KvManager extends Manager<Kv> {
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
                throw new JsError(
                    "not found value",
                    { key },
                    {
                        ko: "내부서버오류",
                    });
            }

            const value = JSON.stringify(defaults[0]);

            await col.insertOne({
                _id: new ObjectId(),
                key,
                value,
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
