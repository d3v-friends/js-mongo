import { JsError } from "@js-pure";
import { Connection } from "mongoose";
import { KvManager } from "../doc";
import { Manager } from "../type/manager";

const keyMigration = "migration";

export async function migrate(conn: Connection, ...models: Manager<any>[]): Promise<void> {
    const docKv = new KvManager();
    const isMig = await docKv.get(conn, keyMigration, false);
    if (isMig) {
        throw new JsError(
            "in processing migration",
            {},
            {
                ko: "마이그레이션이 이미 실행중입니다.",
            },
        );
    }

    await docKv.set(conn, keyMigration, true);

    for (const model of models) {
        const key = `mig_${model.colNm}`;
        const idx = await docKv.get(conn, key, 0);
        for (let i = idx; i < model.migrate.length; i++) {
            const fn = model.migrate[i];
            await fn(conn.model(model.colNm, model.schema));
            await docKv.set(conn, key, i + 1);
        }
    }

    await docKv.set(conn, keyMigration, false);
}
