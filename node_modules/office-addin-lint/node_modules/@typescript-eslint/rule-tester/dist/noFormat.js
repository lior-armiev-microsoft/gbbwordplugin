"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noFormat = void 0;
/**
 * Simple no-op tag to mark code samples as "should not format with prettier"
 *   for the plugin-test-formatting lint rule
 */
function noFormat(raw, ...keys) {
    return String.raw({ raw }, ...keys);
}
exports.noFormat = noFormat;
//# sourceMappingURL=noFormat.js.map