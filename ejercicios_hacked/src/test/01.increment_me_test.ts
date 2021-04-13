import {test_runner} from '../resources/hey_ya'
import {increment_me} from '../main/01.increment_me'
import {compare_integers} from '../resources/compare_functions'

let test_values = [[2, 3], [5, 6], [8, 9]];
const message_tests: string[] = ["2 ==> 3", "5 ==> 6", "8 ==> 9"];

test_runner(increment_me, test_values, message_tests, compare_integers);