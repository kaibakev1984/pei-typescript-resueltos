"use strict";
// NOTA: Usar en todas las implementaciones el atributo "palabra"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palabra = void 0;
class Palabra {
    constructor(palabra) {
        this.palabra = palabra;
    }
    // Devuelve un booleano si una palabra es "capicua".
    esCapicua() {
        for (let i = 0; i < this.palabra.length / 2; i++) {
            if (this.palabra[i] != this.palabra[this.palabra.length - i - 1]) {
                return false;
            }
        }
        return true;
    }
    // Devuelve un true si toda la palabra está escrita en mayúscula
    esMayuscula() {
        return this.palabra.toUpperCase() == this.palabra;
    }
    // Devuelve true si palabra está en minúscula
    esMinuscula() {
        return this.palabra.toLocaleLowerCase() == this.palabra;
    }
    // Devuelve palabra "invertida"
    // Ej: invertir("perro") ==> "orrep"
    intertir() {
        let str = "";
        for (let i = 0; i < this.palabra.length; i++) {
            str = str + this.palabra[this.palabra.length - i - 1];
        }
        return str;
    }
}
exports.Palabra = Palabra;
