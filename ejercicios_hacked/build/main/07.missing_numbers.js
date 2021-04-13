"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missing_numbers = void 0;
const missing_numbers = (input) => {
    let output = [];
    let i = 0;
    input.sort().forEach(element => {
        while (element != i) {
            output.push(i++);
        }
        i++;
    });
    return output;
};
exports.missing_numbers = missing_numbers;
