"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hey_ya_1 = require("../resources/hey_ya");
const compare_functions_1 = require("../resources/compare_functions");
const _06_panama_1 = require("../main/06.panama");
const test_values = [[["c", "a", "t"], false], [["k", "a", "y", "a", "k"], true], [["b", "o", "b"], true]];
const message_tests = ["[c, a, t] ==> false", "[k, a, y, a, k] ==> true", "[b, o, b] ==> true"];
hey_ya_1.test_runner(_06_panama_1.panama, test_values, message_tests, compare_functions_1.compare_booleans);
