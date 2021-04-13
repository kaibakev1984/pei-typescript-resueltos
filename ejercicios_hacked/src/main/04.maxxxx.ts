const maxxxx = (input: number[]) => {
    let max_value = input[0];
    input.forEach(value => {
        if (value > max_value) {
            max_value = value;
        }
    });
    return max_value;
}

export {maxxxx}