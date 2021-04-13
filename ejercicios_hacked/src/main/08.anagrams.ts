
// str_compare se usa para comparar dos array de strings 
// Ej:
// str_compare([a, b, c], [a, b, c]) devuelve true
// str_compare([a, b], [b, a]) devuelve false
const str_compare = (a: string[], b: string[]): boolean => {
    return JSON.stringify(a) === JSON.stringify(b);
}

const anagrams = (input: string[][]): boolean => {
    let str_array: string[] = input[0];
    for(let i = 1; i < input.length; i++) {
        if(!str_compare(str_array.sort(), input[i].sort())) {
            return false;
        }
        str_array = input[i];
    }
    return true;
}

export {anagrams}