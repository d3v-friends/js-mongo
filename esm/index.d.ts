import connect from "./connect";
import migrate from "ts/docMigrate";
declare const Mongo: {
    connect: typeof connect;
    migrate: typeof migrate;
};
export default Mongo;
