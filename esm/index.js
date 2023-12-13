"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = __importDefault(require("./connect"));
const docMigrate_1 = __importDefault(require("ts/docMigrate"));
const Mongo = {
    connect: connect_1.default,
    migrate: docMigrate_1.default,
};
exports.default = Mongo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUFnQztBQUNoQywrREFBb0M7QUFFcEMsTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPLEVBQVAsaUJBQU87SUFDUCxPQUFPLEVBQVAsb0JBQU87Q0FDVixDQUFDO0FBRUYsa0JBQWUsS0FBSyxDQUFDIn0=