import { fnConn } from "./connect";
import { migrate } from "./migrate";
import { fnFinder } from "./finder";

export const fnMongo = {
    ...fnConn,
    ...fnFinder,
    migrate,
};
