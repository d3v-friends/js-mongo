# pnpm add -D esbuild
# pnpm add -D dts-bundle-generator
rm -rf ./dist
mkdir -p ./dist/cjs
# mkdir -p ./dist/mjs

# node ./config/esbuild.cjs
tsc -p ./config/tsconfig.cjs.json
# tsc -p ./config/tsconfig.mjs.json
dts-bundle-generator --config ./config/dts.cjs
git add ./dist --all
