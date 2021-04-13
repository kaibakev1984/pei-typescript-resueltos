import {test_runner} from '../resources/hey_ya'
import {anagrams} from '../main/08.anagrams'
import { compare_booleans } from '../resources/compare_functions';

const test_values = [[[["d", "a", "d"], ["a", "d", "d"]], true], [[["a", "t", "e"], ["e", "a", "t"], ["t", "e", "a"]], true], [[["n", "o", "t"], ["o", "n", "e"]], false]];
const message_test = ["[[d, a, d], [a, d, d]] ==> true", "[[a, t, e], [e, a, t], [t, e, a]] ==> true", "[[n, o, t], [o, n, e]] ==> false"];

test_runner(anagrams, test_values, message_test, compare_booleans);

