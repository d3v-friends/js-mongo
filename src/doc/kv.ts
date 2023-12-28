import { JsError } from "@js-pure";
import { Schema, Connection } from "mongoose";
import { FnMigrate, Manager } from "../type/manager";

interface Kv {
    key: string;
    value: string;
}

export class KvManager extends Manager<Kv> {
    public readonly migrate: FnMigrate<Kv>[] = [];
    public readonly colNm: string;
    public readonly schema = new Schema<Kv>(
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
    );

    constructor(colNm = "kvs") {
        super();
        this.colNm = colNm;
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
