import { Pager, ResultList } from "../type";
import { Collection, Sort } from "mongodb";
declare function findOne<RES extends object>(col: Collection<RES>, filter: object, ...sorts: Sort[]): Promise<RES>;
declare function findAll<RES extends object>(col: Collection<RES>, filter: object, ...sorts: Sort[]): Promise<RES[]>;
declare function findList<RES extends object>(col: Collection<RES>, filter: object, pager: Pager, ...sorts: Sort[]): Promise<ResultList<RES>>;
declare const finder: {
    one: typeof findOne;
    all: typeof findAll;
    list: typeof findList;
};
export default finder;
