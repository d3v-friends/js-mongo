import connect from "./connect";
import finder from "./finder";
import reindex from "./reindex";
import migrate from "./migrate";

const fnMongo = {
    ...connect,
    ...finder,
    reindex,
    migrate,
};

export default fnMongo;
