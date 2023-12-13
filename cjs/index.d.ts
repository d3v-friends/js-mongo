import connect from "./connect";
import migrate from "./docMigrate";
declare const Mongo: {
    connect: typeof connect;
    migrate: typeof migrate;
};
export default Mongo;
