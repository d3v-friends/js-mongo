import { fnErr } from "@js-pure";
import { Db } from "mongodb";
import { DocKv } from "@src/doc";
import { Schema } from "@src/type";

export default async function migrate(db: Db, ...models: Schema<any>[]): Promise<void> {
    models = [DocKv, ...models];
    await createCollection(db, models);

    const isMig = await DocKv.getBool(db, keyMigration, false);
    if (isMig) {
        throw new fnErr.Error("in processing migration", {
            ko: "마이그레이션이 이미 실행중입니다.",
        });
    }

    await DocKv.set(db, keyMigration, true);

    for (const model of models) {
        const key = `mig_${model.colNm}`;
        const idx = await DocKv.getInt(db, key, 0);
        for (let i = idx; i < model.migrate.length; i++) {
            const fn = model.migrate[i];
            await fn(db.collection(model.colNm));
            await DocKv.set(db, key, i + 1);
        }
    }

    await DocKv.set(db, keyMigration, false);
}

const keyMigration = "migration";

async function createCollection(db: Db, models: Schema<any>[]): Promise<void> {
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
}
