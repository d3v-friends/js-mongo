import reindex from "./reindex";
import migrate from "./migrate";
declare const fnMongo: {
    reindex: typeof reindex;
    migrate: typeof migrate;
    one: <RES extends object>(col: import("mongodb").Collection<RES>, filter: object, ...sorts: import("mongodb").Sort[]) => Promise<RES>;
    all: <RES_1 extends object>(col: import("mongodb").Collection<RES_1>, filter: object, ...sorts: import("mongodb").Sort[]) => Promise<RES_1[]>;
    list: <RES_2 extends object>(col: import("mongodb").Collection<RES_2>, filter: object, pager: import("..").Pager, ...sorts: import("mongodb").Sort[]) => Promise<import("..").ResultList<RES_2>>;
    connect: ({ host, username, password, database }: {
        host: string;
        username: string;
        password: string;
        database: string;
    }) => Promise<import("mongodb").Db>;
    createFactory: (v: {
        host: string;
        username: string;
        password: string;
        database: string;
    }) => () => Promise<import("mongodb").Db>;
};
export default fnMongo;
