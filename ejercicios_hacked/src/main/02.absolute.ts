function absolute(input: number) {
    if(input < 0) {
        return -1 * input;
    }
    return input;
}

export {absolute}