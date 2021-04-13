"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anagrams = void 0;
// str_compare se usa para comparar dos array de strings 
// Ej:
// str_compare([a, b, c], [a, b, c]) devuelve true
// str_compare([a, b], [b, a]) devuelve false
const str_compare = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};
const anagrams = (input) => {
    let str_array = input[0];
    for (let i = 1; i < input.length; i++) {
        if (!str_compare(str_array.sort(), input[i].sort())) {
            return false;
        }
        str_array = input[i];
    }
    return true;
};
exports.anagrams = anagrams;
