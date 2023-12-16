import connect from "./connect";
import migrate from "./migrate";
declare const fn: {
    connect: typeof connect;
    migrate: typeof migrate;
    finder: {
        one: <RES extends object>(col: import("mongodb").Collection<RES>, filter: object, ...sorts: import("mongodb").Sort[]) => Promise<RES>;
        all: <RES_1 extends object>(col: import("mongodb").Collection<RES_1>, filter: object, ...sorts: import("mongodb").Sort[]) => Promise<RES_1[]>;
        list: <RES_2 extends object>(col: import("mongodb").Collection<RES_2>, filter: object, pager: import("..").Pager, ...sorts: import("mongodb").Sort[]) => Promise<import("..").ResultList<RES_2>>;
    };
};
export default fn;
