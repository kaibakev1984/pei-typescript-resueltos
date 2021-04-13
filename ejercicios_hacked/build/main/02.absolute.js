"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absolute = void 0;
function absolute(input) {
    if (input < 0) {
        return -1 * input;
    }
    return input;
}
exports.absolute = absolute;
