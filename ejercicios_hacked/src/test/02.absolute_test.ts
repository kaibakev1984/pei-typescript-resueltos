import {print_test} from '../resources/print_test'
import {absolute} from '../main/02.absolute'
import {test_runner} from '../resources/hey_ya'
import {compare_integers} from '../resources/compare_functions'

let test_values = [[1, 1], [-2, 2], [0, 0]];
let message_tests = ["1 ==> 1", "-2 ==> 2", "0 ==> 0"];

test_runner(absolute, test_values, message_tests, compare_integers);