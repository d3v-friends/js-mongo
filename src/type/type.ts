import { Collection, CreateIndexesOptions, Document, IndexSpecification, ObjectId } from "mongodb";

export type Pager = {
    page: number;
    size: number;
};

export interface ResultList<DATA extends Document = Document> {
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

export type FnMigrate<DATA extends Document = Document> = (col: Collection<DATA>) => Promise<void>;

export type Bool = "true" | "false";

export interface Kv {
    _id: ObjectId;
    key: string;
    value: string;
    updatedAt: Date;
}

export type IdsElem = [IndexSpecification, CreateIndexesOptions];

export interface IdxArgs {
    list: IdsElem[],
}

export interface ConnectArg {
    host: string;
    username: string;
    password: string;
    database: string;
};
