rm -rf cjs
rm -rf mjs

tsc -p ./tsconfig.cjs.json
tsc -p ./tsconfig.mjs.json

git add ./cjs --all
git add ./mjs --all
