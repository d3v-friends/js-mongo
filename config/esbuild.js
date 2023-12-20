const { build } = require("esbuild");

const sharedConfig = {
    tsconfig: "tsconfig.json",
    entryPoints: ["./src/index.ts"],
    bundle: true,
    minify: true,
};

Promise.resolve()
    .then(() =>
        build({
            ...sharedConfig,
            platform: "node",
            format: "esm",
            outfile: "dist/index.mjs",
        }),
    )
    .then(() =>
        build({
            ...sharedConfig,
            platform: "node",
            format: "cjs",
            outfile: "dist/index.cjs",
        }),
    )
    .catch(reason => console.log(reason));
