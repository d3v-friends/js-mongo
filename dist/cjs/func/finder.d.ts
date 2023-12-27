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
/// <reference types="mongoose/types/inferschematype" />
import { Pager, ResultList } from "../type";
import { Model } from "mongoose";
export declare const fnFinder: {
    findOne: <T>(model: Model<T, {}, {}, {}, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, any>, filter: object, sort: object) => Promise<T>;
    findAll: <T_1>(model: Model<T_1, {}, {}, {}, import("mongoose").IfAny<T_1, any, import("mongoose").Document<unknown, {}, T_1> & import("mongoose").Require_id<T_1>>, any>, filter: object, sort: object) => Promise<T_1[]>;
    findList: <T_2>(model: Model<T_2, {}, {}, {}, import("mongoose").IfAny<T_2, any, import("mongoose").Document<unknown, {}, T_2> & import("mongoose").Require_id<T_2>>, any>, filter: object, p: Pager, sort: object) => Promise<ResultList<T_2>>;
};
