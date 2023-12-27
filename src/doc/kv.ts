import { fnParam, JsError } from "@js-pure";
import { Db, ObjectId } from "mongodb";
import { Manager, FnMigrate } from "../type";

export interface Kv {
    _id: ObjectId;
    key: string;
    value: string;
    updatedAt: Date;
}

export class MngKv extends Manager<Kv> {
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

        throw new Error("not impl");
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