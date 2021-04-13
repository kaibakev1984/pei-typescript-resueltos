"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora_1 = require("../main/01.calculadora/calculadora");
const print_test_1 = require("../resources/print_test");
const test_suma = (message) => {
    console.log(message);
    let suma = new calculadora_1.Suma();
    print_test_1.print_test("1 + 1 es 2", suma.hacerOperacion(1, 1) == 2);
    print_test_1.print_test("2 + 3 es 5", suma.hacerOperacion(2, 3) == 5);
    print_test_1.print_test("0 + 0 es 0", suma.hacerOperacion(0, 0) == 0);
    print_test_1.print_test("-1 + (-1) es -2", suma.hacerOperacion(-1, -1) == -2);
};
const test_resta = (message) => {
    console.log(message);
    let resta = new calculadora_1.Resta();
    print_test_1.print_test("1 - 1 es 0", resta.hacerOperacion(1, 1) == 0);
    print_test_1.print_test("2 - 1 es 1", resta.hacerOperacion(2, 1) == 1);
    print_test_1.print_test("1 - 2 es -1", resta.hacerOperacion(1, 2) == -1);
    print_test_1.print_test("1 - (-1) es 2", resta.hacerOperacion(1, -1) == 2);
    print_test_1.print_test("-1 - (-1) es 0", resta.hacerOperacion(-1, -1) == 0);
};
const test_producto = (message) => {
    console.log(message);
    const producto = new calculadora_1.Producto();
    print_test_1.print_test("1 * 1 es 1", producto.hacerOperacion(1, 1) == 1);
    print_test_1.print_test("1 * 2 es 2", producto.hacerOperacion(1, 2) == 2);
    print_test_1.print_test("2 * 1 es 2", producto.hacerOperacion(2, 1) == 2);
    print_test_1.print_test("0 * 1 es 0", !producto.hacerOperacion(0, 1));
};
test_suma("\nINICIO PRUEBAS SUMA");
test_resta("\nINICIO PRUEBAS RESTA");
test_producto("\nINICIO PRUEBAS PRODUCTO");
