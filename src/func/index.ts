import { fnConn } from "./connect";
import { fnFinder } from "./finder";

import { reindex } from "./reindex";
import { migrate } from "./migrate";

export const fnMongo = {
    ...fnConn,
    ...fnFinder,
    reindex,
    migrate,
};
