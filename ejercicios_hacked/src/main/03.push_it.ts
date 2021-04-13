const push_it = (input: number) => {
    let output_list = [];

    for(let i = 0; i < input; i++) {
        output_list.push(i);
    }
    return output_list;
}

export {push_it}