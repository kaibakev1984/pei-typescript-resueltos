class Producto {
    private nombre: string;
    private unidades: number;

    constructor(nombre: string, unidades: number) {
        this.nombre = nombre;
        this.unidades = unidades;
    }

    public agregarALista = (productos: any, producto: Producto) => {
        productos.set(this.nombre, producto);
    }

    public estaEnLista = (productos: any) => {
        return productos.has(this.nombre);
    }

    public obtenerCantidadEnLista = (productos: any) => {
        if(!this.estaEnLista(productos)) {
            return -1;
        }
        return productos.get(this.nombre).unidades;
    }
}

export {Producto}