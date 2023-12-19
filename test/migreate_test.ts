import { beforeAll, describe, test } from "@jest/globals";
import { fnMongo } from "@src/index";
import { Db } from "mongodb";
import { fnEnv } from "@js-pure";

describe("migrate", () => {
    let db: Db;

    beforeAll(async () => {
        await fnEnv.read(__dirname, ".env");
        const db = await fnMongo.connect({
            host: fnEnv.string("MG_HOST"),
            username: fnEnv.string("MG_USERNAME"),
            password: fnEnv.string("MG_PASSWORD"),
            database: fnEnv.string("MG_DATABASE"),
        });

        const getDB = fnMongo.createFactory({
            host: fnEnv.string("MG_HOST"),
            username: fnEnv.string("MG_USERNAME"),
            password: fnEnv.string("MG_PASSWORD"),
            database: fnEnv.string("MG_DATABASE"),
        });

        const db1 = await getDB();
    });

    test("init", async () => {
    });
});
