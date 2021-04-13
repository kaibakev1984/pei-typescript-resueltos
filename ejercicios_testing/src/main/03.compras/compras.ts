import { Producto } from "./producto";

class Compras {
    private productos: any;

    constructor() {
        this.productos = new Map();
    }

    agregarProducto = (producto: Producto) => {
        producto.agregarALista(this.productos, producto);
    }

    estaEnListaDeCompras = (producto: Producto) => {
        return producto.estaEnLista(this.productos);
    }

    obtenerCantidad = (producto: Producto) => {
        return producto.obtenerCantidadEnLista(this.productos);
    }
}

export {Compras}