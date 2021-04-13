import {test_runner} from '../resources/hey_ya'
import {compare_integers} from '../resources/compare_functions'
import {odd} from '../main/05.ood'

let test_values = [[5, 1], [7, 1], [2, 0]];
let message_tests = ["5 ==> 1", "7 ==> 1", "2 ==> 0"];

test_runner(odd, test_values, message_tests, compare_integers);