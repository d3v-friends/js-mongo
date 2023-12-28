/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { migrate } from "./migrate";
export declare const fnMongo: {
    migrate: typeof migrate;
    findOne: <T>(model: MongooseModel<T>, filter: object, sort: object) => Promise<T>;
    findAll: <T_1>(model: MongooseModel<T_1>, filter: object, sort: object) => Promise<T_1[]>;
    findList: <T_2>(model: MongooseModel<T_2>, filter: object, p: import("..").Pager, sort: object) => Promise<import("..").ResultList<T_2>>;
    connect: ({ host, username, password, database }: import("..").ConnectArg) => Promise<import("mongoose").Connection>;
    connectByEnv: () => Promise<import("mongoose").Connection>;
    connectionFactory: (v: import("..").ConnectArg) => () => Promise<import("mongoose").Connection>;
};
