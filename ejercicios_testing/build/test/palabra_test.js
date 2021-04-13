"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palabra_1 = require("../main/02.palabra/palabra");
const print_test_1 = require("../resources/print_test");
const test_capicua = (tittle) => {
    console.log(tittle);
    let palabra1 = new palabra_1.Palabra("abcba");
    let palabra2 = new palabra_1.Palabra("abcdf");
    let palabra3 = new palabra_1.Palabra("NEUQUEN");
    print_test_1.print_test("abcba es capicua", palabra1.esCapicua());
    print_test_1.print_test("abcdf no es capicua", !palabra2.esCapicua());
    print_test_1.print_test("NEUQUEN es capicua", palabra3.esCapicua());
};
const test_mayuscula = (tittle) => {
    console.log(tittle);
    let palabra1 = new palabra_1.Palabra("abc");
    let palabra2 = new palabra_1.Palabra("ABC");
    print_test_1.print_test("abc no está en mayúscula", !palabra1.esMayuscula());
    print_test_1.print_test("ABC está en mayúscula", palabra2.esMayuscula());
};
const test_minuscula = (title) => {
    console.log(title);
    let palabra1 = new palabra_1.Palabra("abc");
    let palabra2 = new palabra_1.Palabra("ABC");
    print_test_1.print_test("abc está en minúscula", palabra1.esMinuscula());
    print_test_1.print_test("ABC no está en minúscula", !palabra2.esMinuscula());
};
const test_invertir_palabra = (title) => {
    console.log(title);
    let palabra1 = new palabra_1.Palabra("abcdef");
    print_test_1.print_test("abcdef invertido es fedcba", palabra1.intertir() == "fedcba");
};
test_capicua("\nINICIO PRUEBAS CAPICUA");
test_mayuscula("\nINICIO PRUEBAS PALABRAS EN MAYÚSCULAS");
test_minuscula("\nINICIO PRUEBAS PALABRAS EN MINÚSCULAS");
test_invertir_palabra("\nINICIO PRUEBAS PALABRAS INVERTIDAS");
