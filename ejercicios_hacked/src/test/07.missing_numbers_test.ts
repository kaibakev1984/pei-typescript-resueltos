import {test_runner} from '../resources/hey_ya'
import {missing_numbers} from '../main/07.missing_numbers'
import {compare_lists} from '../resources/compare_functions'

const test_values = [[[0, 3, 2], [1]], [[1, 3], [0, 2]], [[4, 2, 3], [0, 1]]];
const message_tests = ["[0, 3, 2] ==> [1]", "[1, 3] ==> [0, 2]", "[4, 2, 3] ==> [0, 1]"];

test_runner(missing_numbers, test_values, message_tests, compare_lists);