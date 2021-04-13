"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hey_ya_1 = require("../resources/hey_ya");
const _07_missing_numbers_1 = require("../main/07.missing_numbers");
const compare_functions_1 = require("../resources/compare_functions");
const test_values = [[[0, 3, 2], [1]], [[1, 3], [0, 2]], [[4, 2, 3], [0, 1]]];
const message_tests = ["[0, 3, 2] ==> [1]", "[1, 3] ==> [0, 2]", "[4, 2, 3] ==> [0, 1]"];
hey_ya_1.test_runner(_07_missing_numbers_1.missing_numbers, test_values, message_tests, compare_functions_1.compare_lists);
