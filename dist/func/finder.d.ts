import { Pager, ResultList } from "../type";
export declare const fnFinder: {
    findOne: <T>(model: MongooseModel<T>, filter: object, sort: object) => Promise<T>;
    findAll: <T_1>(model: MongooseModel<T_1>, filter: object, sort: object) => Promise<T_1[]>;
    findList: <T_2>(model: MongooseModel<T_2>, filter: object, p: Pager, sort: object) => Promise<ResultList<T_2>>;
};
