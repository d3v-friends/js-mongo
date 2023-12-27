rm -rf ./dist
mkdir -p ./dist/cjs

tsc -p ./config/tsconfig.cjs.json
git add ./dist --all
