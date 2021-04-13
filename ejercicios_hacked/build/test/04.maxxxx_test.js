"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hey_ya_1 = require("../resources/hey_ya");
const compare_functions_1 = require("../resources/compare_functions");
const _04_maxxxx_1 = require("../main/04.maxxxx");
const test_values = [[[3, 1, 8, 0, 2], 8], [[1, 3, 2], 3], [[9, 42, 7, 13], 42]];
const message_tests = ["[3, 1, 8, 0, 2] ==> 8", "[1, 3, 2] ==> 3", "[9, 42, 7, 13] ==> 42"];
hey_ya_1.test_runner(_04_maxxxx_1.maxxxx, test_values, message_tests, compare_functions_1.compare_integers);
