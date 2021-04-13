"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare_booleans = exports.compare_lists = exports.compare_integers = void 0;
const compare_integers = (a, b) => {
    return a == b;
};
exports.compare_integers = compare_integers;
const compare_lists = (a, b) => {
    if (a.length != b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i])
            return false;
    }
    return true;
};
exports.compare_lists = compare_lists;
const compare_booleans = (a, b) => {
    return a == b;
};
exports.compare_booleans = compare_booleans;
