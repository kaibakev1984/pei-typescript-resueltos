"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxxxx = void 0;
const maxxxx = (input) => {
    let max_value = input[0];
    input.forEach(value => {
        if (value > max_value) {
            max_value = value;
        }
    });
    return max_value;
};
exports.maxxxx = maxxxx;
