import * as lib from "./vendor/makefun-site/index.js";
const fn = lib["build"] ?? (lib.default != null && typeof lib.default["build"] === 'function' ? lib.default["build"].bind(lib.default) : undefined);
export function run(input){ return fn(input); }