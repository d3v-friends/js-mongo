import { beforeAll, describe, test } from "@jest/globals";
import { fnEnv } from "@js-pure";
import { Connection } from "mongoose";
import { fnMongo } from "@src/func";

describe("migrate", () => {
    let conn: Connection;

    beforeAll(async () => {
        await fnEnv.read(__dirname, ".env");
        conn = await fnMongo.connectByEnv();
    });

    test("migrate", async () => {
        await fnMongo.migrate(conn);
    });
});
