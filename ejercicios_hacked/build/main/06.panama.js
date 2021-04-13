"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.panama = void 0;
const panama = (input) => {
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] != input[input.length - i - 1]) {
            return false;
        }
    }
    return true;
};
exports.panama = panama;
