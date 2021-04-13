import {print_test} from '../resources/print_test'

const failure_outputs = (user_function: Function, test_values: any[], message_tests: string[], compare: Function) => {
    console.log("Pattern Detected...");
    let i: number = 0;
    test_values.forEach(test_case => {
        print_test(message_tests[i], compare(user_function(test_case[0]), test_case[1]));
        i++;
    });
}

const get_test_results = (user_function: Function, test_values: any[], compare: Function) => {
    let ok: boolean = true;
    test_values.forEach(test_case => {
        ok = ok && compare(user_function(test_case[0]), test_case[1]);
    });
    return ok;
}

const test_runner = (user_function: Function, test_values: any[], message_tests: string[], compare: Function) => {
    if(get_test_results(user_function, test_values, compare)) {
        console.log("Hack successfull...");
    } else {
        failure_outputs(user_function, test_values, message_tests, compare);
    }
}

export {test_runner}