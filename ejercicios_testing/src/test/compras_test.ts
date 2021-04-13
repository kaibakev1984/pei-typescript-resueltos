import {beautify} from '../resources/beauty_title'
import {Producto} from '../main/03.compras/producto'
import {Compras} from '../main/03.compras/compras'
import { print_test } from '../resources/print_test';

const compras_test = (title: string) => {
    console.log(beautify(title));

    let lista_compras = new Compras();
    
    let harina = new Producto("Harina", 2);
    let leche = new Producto("Leche", 1);
    let dulceDeLeche = new Producto("Dulce de leche", 2);
    let mayonesa = new Producto("Mayonesa", 2);

    lista_compras.agregarProducto(leche);
    lista_compras.agregarProducto(harina);
    lista_compras.agregarProducto(dulceDeLeche);

    print_test("Hay leche en lista de compras", lista_compras.estaEnListaDeCompras(leche));
    print_test("Hay harina en lista de compras", lista_compras.estaEnListaDeCompras(harina));
    print_test("Hay dulce de leche en lista de compras", lista_compras.estaEnListaDeCompras(dulceDeLeche));
    print_test("No hay mayonesa en lista de compras", !lista_compras.estaEnListaDeCompras(mayonesa));
}

const compras_cantidad_en_lista_test = (title: string) => {
    console.log(beautify(title));

    let lista_compras = new Compras();
    let harina = new Producto("Harina", 2);
    let leche = new Producto("Leche", 1);
    let dulceDeLeche = new Producto("Dulce de leche", 2);
    let mayonesa = new Producto("Mayonesa", 2);

    lista_compras.agregarProducto(leche);
    lista_compras.agregarProducto(harina);
    lista_compras.agregarProducto(dulceDeLeche);

    print_test("Hay 2 unidades de Harina en lista de compras", lista_compras.obtenerCantidad(harina) == 2);
    print_test("Hay 1 unidad de Leche en lista de compras", lista_compras.obtenerCantidad(leche) == 1);
    print_test("Hay 2 unidades de Dulce de Leche en lista de compras", lista_compras.obtenerCantidad(dulceDeLeche) == 2);
    print_test("No hay unidades de mayonesa en lista de compras", lista_compras.obtenerCantidad(mayonesa) == -1);
}

compras_test("\nINICIO PRUEBAS COMPRAS ESTÁ EN LISTA DE COMPRAS");
compras_cantidad_en_lista_test("\nINICIO PRUEBAS COMPRAS CANTIDAD EN LISTA");
