"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_absolute_1 = require("../main/02.absolute");
const hey_ya_1 = require("../resources/hey_ya");
const compare_functions_1 = require("../resources/compare_functions");
let test_values = [[1, 1], [-2, 2], [0, 0]];
let message_tests = ["1 ==> 1", "-2 ==> 2", "0 ==> 0"];
hey_ya_1.test_runner(_02_absolute_1.absolute, test_values, message_tests, compare_functions_1.compare_integers);
