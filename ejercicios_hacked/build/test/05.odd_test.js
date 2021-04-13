"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hey_ya_1 = require("../resources/hey_ya");
const compare_functions_1 = require("../resources/compare_functions");
const _05_ood_1 = require("../main/05.ood");
let test_values = [[5, 1], [7, 1], [2, 0]];
let message_tests = ["5 ==> 1", "7 ==> 1", "2 ==> 0"];
hey_ya_1.test_runner(_05_ood_1.odd, test_values, message_tests, compare_functions_1.compare_integers);
