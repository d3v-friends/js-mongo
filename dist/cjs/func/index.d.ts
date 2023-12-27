import { reindex } from "./reindex";
import { migrate } from "./migrate";
export declare const fnMongo: {
    reindex: typeof reindex;
    migrate: typeof migrate;
    one: <DATA extends import("mongodb").Document = import("mongodb").Document>(col: import("mongodb").Collection<DATA>, filter: object, ...sorts: import("mongodb").Sort[]) => Promise<DATA>;
    all: <DATA_1 extends import("mongodb").Document = import("mongodb").Document>(col: import("mongodb").Collection<DATA_1>, filter: object, ...sorts: import("mongodb").Sort[]) => Promise<DATA_1[]>;
    list: <DATA_2 extends import("mongodb").Document = import("mongodb").Document>(col: import("mongodb").Collection<DATA_2>, filter: object, pager: import("..").Pager, ...sorts: import("mongodb").Sort[]) => Promise<import("..").ResultList<DATA_2>>;
    connect: ({ host, username, password, database, opts }: import("..").ConnectArg) => Promise<import("mongodb").Db>;
    connectionFactory: (v: import("..").ConnectArg) => () => Promise<import("mongodb").Db>;
};
