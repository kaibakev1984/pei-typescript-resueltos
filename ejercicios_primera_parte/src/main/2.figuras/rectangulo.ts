export class Rectangulo {

    private _ancho: number;
    private _alto: number;

    constructor(ancho: number, alto: number) {
        this._ancho = ancho;
        this._alto = alto;
    }

    //  printAncho() muestra por consola el ancho del rectángulo
    public printAncho() {
        console.log("El ancho del rectángulo es "+this._ancho);
    }

    // printAlto() muestra por conso la altura del rectángulo
    public printAlto() {
        console.log("El alto del rectángulo es "+this._alto);
    }

    // calcularArea() muestra el área del rectángulo por consola
    public calcularArea() {
        const area = this._alto * this._ancho;

        console.log("El área del rectángulo es " + area);
    }
}