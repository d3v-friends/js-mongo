# pnpm add -D esbuild
# pnpm add -D dts-bundle-generator
rm -rf ./dist
node ./config/esbuild.js
dts-bundle-generator --config ./config/dts.js
git add ./dist --all
