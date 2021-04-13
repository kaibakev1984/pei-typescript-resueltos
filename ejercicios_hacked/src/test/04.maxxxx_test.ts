import {test_runner} from '../resources/hey_ya'
import {compare_integers} from '../resources/compare_functions'
import {maxxxx} from '../main/04.maxxxx'

const test_values = [[[3, 1, 8, 0, 2], 8], [[1, 3, 2], 3], [[9, 42, 7, 13], 42]];
const message_tests = ["[3, 1, 8, 0, 2] ==> 8", "[1, 3, 2] ==> 3", "[9, 42, 7, 13] ==> 42"];

test_runner(maxxxx, test_values, message_tests, compare_integers);