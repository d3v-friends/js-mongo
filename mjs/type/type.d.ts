import { Collection } from "mongodb";
export type Pager = {
    page: number;
    size: number;
};
export type ResultList<RES extends object> = {
    page: number;
    size: number;
    total: number;
    list: RES[];
};
export type DateQuery = Partial<{
    $lt: Date;
    $lte: Date;
    $eq: Date;
    $gt: Date;
    $gte: Date;
}>;
export type FnMigrate<DATA extends object> = (col: Collection<DATA>) => Promise<void>;
export type Bool = "true" | "false";
