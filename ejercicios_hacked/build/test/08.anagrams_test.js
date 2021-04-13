"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hey_ya_1 = require("../resources/hey_ya");
const _08_anagrams_1 = require("../main/08.anagrams");
const compare_functions_1 = require("../resources/compare_functions");
const test_values = [[[["d", "a", "d"], ["a", "d", "d"]], true], [[["a", "t", "e"], ["e", "a", "t"], ["t", "e", "a"]], true], [[["n", "o", "t"], ["o", "n", "e"]], false]];
const message_test = ["[[d, a, d], [a, d, d]] ==> true", "[[a, t, e], [e, a, t], [t, e, a]] ==> true", "[[n, o, t], [o, n, e]] ==> false"];
hey_ya_1.test_runner(_08_anagrams_1.anagrams, test_values, message_test, compare_functions_1.compare_booleans);
