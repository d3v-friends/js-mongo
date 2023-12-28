"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var config = {
    verbose: true,
    preset: "ts-jest",
    testRegex: "^.+[ts|js|tsx|jsx]$",
    transform: {},
    moduleNameMapper: {
        "^@src/(.*)$": path_1.default.resolve("<rootDir>", "..", "$1"),
    },
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map