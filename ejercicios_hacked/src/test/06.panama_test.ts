import {test_runner} from '../resources/hey_ya'
import {compare_booleans} from '../resources/compare_functions'
import {panama} from '../main/06.panama'

const test_values = [[["c", "a", "t"], false], [["k", "a", "y", "a", "k"], true], [["b", "o", "b"], true]];
const message_tests = ["[c, a, t] ==> false", "[k, a, y, a, k] ==> true", "[b, o, b] ==> true"];

test_runner(panama, test_values, message_tests, compare_booleans);