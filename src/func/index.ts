import { fnConn } from "./connect";
import { migrate } from "./migrate";

export const fnMongo = {
    ...fnConn,
    migrate,
};
