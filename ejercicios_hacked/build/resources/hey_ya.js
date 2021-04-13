"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test_runner = void 0;
const print_test_1 = require("../resources/print_test");
const failure_outputs = (user_function, test_values, message_tests, compare) => {
    console.log("Pattern Detected...");
    let i = 0;
    test_values.forEach(test_case => {
        print_test_1.print_test(message_tests[i], compare(user_function(test_case[0]), test_case[1]));
        i++;
    });
};
const get_test_results = (user_function, test_values, compare) => {
    let ok = true;
    test_values.forEach(test_case => {
        ok = ok && compare(user_function(test_case[0]), test_case[1]);
    });
    return ok;
};
const test_runner = (user_function, test_values, message_tests, compare) => {
    if (get_test_results(user_function, test_values, compare)) {
        console.log("Hack successfull...");
    }
    else {
        failure_outputs(user_function, test_values, message_tests, compare);
    }
};
exports.test_runner = test_runner;
