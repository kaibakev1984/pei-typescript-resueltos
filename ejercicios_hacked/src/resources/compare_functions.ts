const compare_integers = (a: number, b: number) => {
    return a == b;
}

const compare_lists = (a: any[], b: any[]) => {
    if (a.length != b.length) return false;
    for(let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
}

const compare_booleans = (a: boolean, b: boolean) => {
    return a == b;
}

export {compare_integers, compare_lists, compare_booleans}