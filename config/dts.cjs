/** @type import('dts-bundle-generator/config-schema').OutputOptions */
const output = {
    inlineDeclareGlobals: false,
    sortNodes: true,
};

/** @type import('dts-bundle-generator/config-schema').BundlerConfig */
module.exports = {
    compilationOptions: {
        preferredConfigPath: "../tsconfig.json",
    },
    entries: [
        {
            filePath: "../src/index.ts",
            outFile: "../dist/index.d.ts",
            noCheck: false,
            output,
        },
    ],
};
