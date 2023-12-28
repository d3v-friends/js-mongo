import { fnParam, JsError } from "@js-pure";
import { Schema, Connection } from "mongoose";
import { Manager } from "@src/type";

interface Kv {
    key: string;
    value: string;
}

export class KvManager extends Manager<Kv> {
    constructor(colNm = "kvs") {
        super(
            colNm,
            new Schema<Kv>(
                {
                    key: {
                        type: String,
                        unique: true,
                        required: true,
                    },
                    value: {
                        type: String,
                        required: true,
                    },
                },
                {
                    timestamps: true,
                },
            ),
            [],
        );
    }

    public async get<T>(conn: Connection, key: string, ...defs: T[]): Promise<T> {
        const model = conn.model(this.colNm, this.schema);
        const res = await model.findOne({ key });
        if (res) {
            return JSON.parse(res.value);
        }

        if (defs.length === 0) {
            throw new JsError(
                "no has data",
                { key },
                {
                    ko: "서버에러. 다시 시도하여 주십시오.",
                },
            );
        }

        const def = defs[0];
        await model.create({
            key,
            value: JSON.stringify(def),
        });
        return def;
    }

    public async set<T>(conn: Connection, key: string, value: T): Promise<void> {
        await this.model(conn).updateOne(
            {
                key,
            },
            {
                $set: {
                    value: JSON.stringify(value),
                },
            },
            {
                upsert: true,
            },
        );
    }
}
