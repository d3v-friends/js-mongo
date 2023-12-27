import { Model } from "mongoose";

export type Pager = {
    page: number;
    size: number;
};

export interface ResultList<DATA> {
    page: number;
    size: number;
    total: number;
    list: DATA[];
}

export type DateQuery = Partial<{
    $lt: Date;
    $lte: Date;
    $eq: Date;
    $gt: Date;
    $gte: Date;
}>;

export type FnMigrate<T> = (model: Model<T>) => Promise<void>;

export type Bool = "true" | "false";

export interface ConnectArg {
    host: string;
    username: string;
    password: string;
    database: string;
}
