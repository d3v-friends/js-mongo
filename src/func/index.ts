export { ConnectArg } from "./connect";
import { fnConn } from "./connect";
import { fnFinder } from "./finder";

export { IdsElem, IdxArgs } from "./reindex";
import { reindex } from "./reindex";
import { migrate } from "./migrate";

export const fnMongo = {
    ...fnConn,
    ...fnFinder,
    reindex,
    migrate,
};
