"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    constructor(nombre, unidades) {
        this.agregarALista = (productos, producto) => {
            productos.set(this.nombre, producto);
        };
        this.estaEnLista = (productos) => {
            return productos.has(this.nombre);
        };
        this.obtenerCantidadEnLista = (productos) => {
            if (!this.estaEnLista(productos)) {
                return -1;
            }
            return productos.get(this.nombre).unidades;
        };
        this.nombre = nombre;
        this.unidades = unidades;
    }
}
exports.Producto = Producto;
