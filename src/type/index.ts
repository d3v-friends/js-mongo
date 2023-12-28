import { IndexDirection } from "mongoose";

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

export type Bool = "true" | "false";

export interface ConnectArg {
    host: string;
    username: string;
    password: string;
    database: string;
}

export interface MongooseIndex {
    v: number;
    key: { [key: string]: IndexDirection };
    name: string;
    unique: boolean;
    background: boolean;
}
