import { JsError } from "@js-pure";
import { Db } from "mongodb";
import { DocKv } from "../doc";
import { Docs } from "../type";

const keyMigration = "migration";

const createCollection = async (db: Db, models: Docs<any>[]): Promise<void> => {
    const cur = db.listCollections({}, { nameOnly: true });
    const ls: string[] = [];
    while (await cur.hasNext()) {
        const col = await cur.next();
        if (!col) continue;
        ls.push(col.name);
    }

    for (let model of models) {
        if (ls.includes(model.colNm)) continue;
        await db.createCollection(model.colNm);
    }
};

export const migrate = async (db: Db, ...models: Docs<any>[]): Promise<void> => {
    const docKv = new DocKv(db);
    await createCollection(db, [docKv, ...models]);

    const isMig = await docKv.get(keyMigration, false);
    if (isMig) {
        throw new JsError(
            "in processing migration",
            {},
            {
                ko: "마이그레이션이 이미 실행중입니다.",
            },
        );
    }

    await docKv.set(keyMigration, true);

    for (const model of models) {
        const key = `mig_${model.colNm}`;
        const idx = await docKv.get(key, 0);
        for (let i = idx; i < model.migrate.length; i++) {
            const fn = model.migrate[i];
            await fn(db.collection(model.colNm));
            await docKv.set(key, i + 1);
        }
    }

    await docKv.set(keyMigration, false);
};
