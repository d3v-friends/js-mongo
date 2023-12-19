import connect from "./connect";
import fnFinder from "./finder";
import migrate from "./migrate";
import index from "./idx";

export const fnMongo = {
    ...connect,
    ...fnFinder,
    index,
    migrate,
};
