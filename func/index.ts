import connect from "./connect";
import fnFinder from "./finder";
import migrate from "./migrate";

const fnMongo = {
    ...connect,
    ...fnFinder,
    migrate,
};

export default fnMongo;
