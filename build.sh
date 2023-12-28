CJS="./config/tsconfig.cjs.json"
MJS="./config/tsconfig.mjs.json"
rm -rf ./dist
# tsc -p "$CJS" && tsc-alias -p "$CJS"
# tsc -p "$MJS" && tsc-alias -p "$MJS"
node "config/esbuild.cjs"
dts-bundle-generator --config ./config/dts.cjs
tsc-alias -p "$CJS"
tsc-alias -p "$MJS"
git add ./dist --all
