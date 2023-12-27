import type { Pager, ResultList } from "../type";
import { Collection, Document, Sort } from "mongodb";
declare function findOne<DATA extends Document = Document>(col: Collection<DATA>, filter: object, ...sorts: Sort[]): Promise<DATA>;
declare function findAll<DATA extends Document = Document>(col: Collection<DATA>, filter: object, ...sorts: Sort[]): Promise<DATA[]>;
declare function findList<DATA extends Document = Document>(col: Collection<DATA>, filter: object, pager: Pager, ...sorts: Sort[]): Promise<ResultList<DATA>>;
export declare const fnFinder: {
    one: typeof findOne;
    all: typeof findAll;
    list: typeof findList;
};
export {};
