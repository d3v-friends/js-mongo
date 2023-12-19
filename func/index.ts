import connect from "./connect";
import fnFinder from "./finder";
import migrate from "./migrate";
import index from "./idx";

const fnMongo = {
    ...connect,
    ...fnFinder,
    index,
    migrate,
};

export default fnMongo;
