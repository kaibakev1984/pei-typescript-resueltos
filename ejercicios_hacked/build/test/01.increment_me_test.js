"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hey_ya_1 = require("../resources/hey_ya");
const _01_increment_me_1 = require("../main/01.increment_me");
const compare_functions_1 = require("../resources/compare_functions");
let test_values = [[2, 3], [5, 6], [8, 9]];
const message_tests = ["2 ==> 3", "5 ==> 6", "8 ==> 9"];
hey_ya_1.test_runner(_01_increment_me_1.increment_me, test_values, message_tests, compare_functions_1.compare_integers);
