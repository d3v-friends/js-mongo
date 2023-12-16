import { beforeAll, describe, test } from "@jest/globals";
import { fnMongo } from "@src";
import { Db } from "mongodb";
import { fnEnv } from "@js-pure";

describe("migrate", () => {
    let db: Db;

    beforeAll(async () => {
        await fnEnv.read(__dirname, ".env");
        db = await fnMongo.connect({
            host: fnEnv.string("MG_HOST"),
            username: fnEnv.string("MG_USERNAME"),
            password: fnEnv.string("MG_PASSWORD"),
            database: fnEnv.string("MG_DATABASE"),
        });
    });

    test("init", async () => {
        await fnMongo.migrate(db);
    });
});
