interface Operacion {
    hacerOperacion: Function;
}

class Suma implements Operacion {
    hacerOperacion = (a: number, b: number): number => {
        return a + b;
    }
}

class Resta implements Operacion {
    hacerOperacion = (a: number, b: number): number => {
        return a - b;
    }
}

class Producto implements Operacion {
    hacerOperacion = (a: number, b: number): number => {
        return a * b;
    }
}

export {Operacion, Suma, Resta, Producto}