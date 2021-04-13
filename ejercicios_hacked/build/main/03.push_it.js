"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.push_it = void 0;
const push_it = (input) => {
    let output_list = [];
    for (let i = 0; i < input; i++) {
        output_list.push(i);
    }
    return output_list;
};
exports.push_it = push_it;
