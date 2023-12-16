import { Collection, Db, IndexDirection, ObjectId, Sort } from "mongodb";
import { fnMongo, Schema } from "@src";

type Test = {
    _id: ObjectId;
    username: string;
    salt: string;
    saltedPassword: string;
    createdAt: Date;
    updatedAt: Date;
};

const colNm = "tests";

const fn = {
    col: (db: Db): Collection<Test> => db.collection<Test>(colNm),
    create: async (db: Db, i: {}): Promise<Test> => {
        throw new Error("not impl");
    },
    filter: ({
        id,
        username,
    }: Partial<{
        id: ObjectId[];
        username: Partial<{
            exact: string;
            like: string;
        }>;
    }>): object => {
        const res: any = {};
        if (id) {
            res.id = { $in: id };
        }
        if (username) {
            const { like, exact } = username;
            if (like) {
                res.username = {
                    $regex: {
                        pattern: like,
                    },
                };
            }

            if (exact) {
                res.username = exact;
            }
        }

        return res;
    },
    sort: ({
        username,
    }: Partial<{
        username: IndexDirection;
    }>): Sort => {
        const res: any = {};
        if (username) res.username = username;
        return res;
    },
    findOne: (db: Db): Promise<Test> => {
        return fnMongo.finder.one(
            fn.col(db),
            fn.filter({
                username: {
                    exact: "",
                },
            }),
        );
    },
};

const DocTest: Schema<Test> & typeof fn = {
    colNm,
    migrate: [
        async col => {
            await col.createIndexes([
                {
                    key: {
                        username: 1,
                    },
                    unique: true,
                },
                {
                    key: {
                        username: 1,
                    },
                    unique: true,
                },
                {
                    key: {
                        username: 1,
                        saltedPassword: 1,
                    },
                },
            ]);
        },
    ],
    ...fn,
};

export default DocTest;
