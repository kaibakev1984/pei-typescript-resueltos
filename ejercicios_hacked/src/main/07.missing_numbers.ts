import {maxxxx} from '../main/04.maxxxx'

const missing_numbers = (input: number[]) => {
    let output: number[] = [];
    let i = 0;
    input.sort().forEach(element => {
        while(element != i) {
            output.push(i++);
        }
        i++;
    });
    return output;
}

export {missing_numbers}