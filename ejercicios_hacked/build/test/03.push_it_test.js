"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hey_ya_1 = require("../resources/hey_ya");
const _03_push_it_1 = require("../main/03.push_it");
const compare_functions_1 = require("../resources/compare_functions");
const test_values = [[5, [0, 1, 2, 3, 4]], [2, [0, 1]], [0, []]];
const message_tests = ["5 ==> [0, 1, 2, 3, 4]", "2 ==> [0, 1]", "0 ==> []"];
hey_ya_1.test_runner(_03_push_it_1.push_it, test_values, message_tests, compare_functions_1.compare_lists);
