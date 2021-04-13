"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beautify = void 0;
function beautify(message) {
    let lines = "";
    for (let i = 0; i < message.length; i++) {
        lines += "=";
    }
    return `\n${lines}\n${message}\n\n${lines}\n`;
}
exports.beautify = beautify;
