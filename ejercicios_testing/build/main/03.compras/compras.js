"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compras = void 0;
class Compras {
    constructor() {
        this.agregarProducto = (producto) => {
            producto.agregarALista(this.productos, producto);
        };
        this.estaEnListaDeCompras = (producto) => {
            return producto.estaEnLista(this.productos);
        };
        this.obtenerCantidad = (producto) => {
            return producto.obtenerCantidadEnLista(this.productos);
        };
        this.productos = new Map();
    }
}
exports.Compras = Compras;
