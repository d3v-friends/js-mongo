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
import { Schema, Connection } from "mongoose";
import { Manager } from "../type";
interface Kv {
    key: string;
    value: string;
}
export declare class KvManager extends Manager<Kv> {
    readonly colNm: string;
    readonly schema: Schema<Kv, import("mongoose").Model<Kv, any, any, any, import("mongoose").Document<unknown, any, Kv> & Kv & {
        _id: import("mongoose").Types.ObjectId;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Kv, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Kv>> & import("mongoose").FlatRecord<Kv> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    readonly migrate: never[];
    constructor(...colNms: string[]);
    get<T>(conn: Connection, key: string, ...defs: T[]): Promise<T>;
    set<T>(conn: Connection, key: string, value: T): Promise<void>;
}
export {};
