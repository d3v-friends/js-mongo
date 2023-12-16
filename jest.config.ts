import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
    verbose: true,
    preset: "ts-jest",
    testRegex: "^.+[ts|js|tsx|jsx]$",
    transform: {},
    moduleNameMapper: {
        "^@src/(.*)$": "<rootDir>/ts/$1"
    },
};

export default config;
