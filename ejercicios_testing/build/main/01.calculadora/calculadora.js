"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = exports.Resta = exports.Suma = void 0;
class Suma {
    constructor() {
        this.hacerOperacion = (a, b) => {
            return a + b;
        };
    }
}
exports.Suma = Suma;
class Resta {
    constructor() {
        this.hacerOperacion = (a, b) => {
            return a - b;
        };
    }
}
exports.Resta = Resta;
class Producto {
    constructor() {
        this.hacerOperacion = (a, b) => {
            return a * b;
        };
    }
}
exports.Producto = Producto;
