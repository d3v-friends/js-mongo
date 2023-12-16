import { Collection } from "mongodb";

export type FnMigrate<DATA extends object> = (col: Collection<DATA>) => Promise<void>;

export type Schema<DATA extends object> = {
    migrate: FnMigrate<DATA>[];
    colNm: string;
};
