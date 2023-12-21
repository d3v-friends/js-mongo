import * as conn from "./connect";
import * as finder from "./finder";
import * as migrate from "./migrate";
import * as reindex from "./reindex";

export const fnMongo = {
    ...conn,
    ...finder,
    ...migrate,
    ...reindex,
};
