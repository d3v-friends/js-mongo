"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connect_1 = __importDefault(require("./connect"));
var docMigrate_1 = __importDefault(require("ts/docMigrate"));
var Mongo = {
    connect: connect_1.default,
    migrate: docMigrate_1.default,
};
exports.default = Mongo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFnQztBQUNoQyw2REFBb0M7QUFFcEMsSUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPLG1CQUFBO0lBQ1AsT0FBTyxzQkFBQTtDQUNWLENBQUM7QUFFRixrQkFBZSxLQUFLLENBQUMifQ==