"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print_test = void 0;
const ANSI_COLOR_LGH_RED = "\x1b[31m";
const ANSI_COLOR_LGH_GREEN = "\x1b[32m";
const ANSI_COLOR_RESET = "\x1b[0m";
function print_test(message, ok) {
    if (ok) {
        console.log(`${message}: `, ANSI_COLOR_LGH_GREEN + "OK", ANSI_COLOR_RESET);
    }
    else {
        console.log(`${message}: `, ANSI_COLOR_LGH_RED + "Error", ANSI_COLOR_RESET);
    }
}
exports.print_test = print_test;
