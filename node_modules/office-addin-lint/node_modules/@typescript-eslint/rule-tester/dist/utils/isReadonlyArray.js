"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReadonlyArray = void 0;
// working around https://github.com/microsoft/TypeScript/issues/17002
function isReadonlyArray(arg) {
    return Array.isArray(arg);
}
exports.isReadonlyArray = isReadonlyArray;
//# sourceMappingURL=isReadonlyArray.js.map