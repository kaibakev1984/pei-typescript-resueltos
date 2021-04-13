import {test_runner} from '../resources/hey_ya'
import {push_it} from '../main/03.push_it'
import {compare_lists} from '../resources/compare_functions'

const test_values = [[5, [0, 1, 2, 3, 4]], [2, [0, 1]], [0, []]];
const message_tests = ["5 ==> [0, 1, 2, 3, 4]", "2 ==> [0, 1]", "0 ==> []"];

test_runner(push_it, test_values, message_tests, compare_lists);