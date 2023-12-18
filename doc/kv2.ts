import { ObjectId } from "mongodb";
import { Model } from "@src/type";
import { fnParam } from "@js-pure";

type Kv = {
    _id: ObjectId;
    key: string;
    value: string;
    updatedAt: Date;
}

export class KvModel extends Model<Kv> {
    constructor(...colNms: string[]) {
        const colNm = fnParam.string(colNms, "kvs");
        super(colNm, [
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
        ]);
    }
}
