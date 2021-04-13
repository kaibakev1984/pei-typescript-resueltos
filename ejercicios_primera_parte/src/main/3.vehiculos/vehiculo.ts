export class Vehiculo {

    private _marca: string;
    private _modelo: string;
    private _color: string;
    private _ruedas: number;

    constructor(marca: string, modelo: string, color: string, ruedas: number) {

        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._ruedas = ruedas;

    }

    public getMarca(): string {
        return this._marca;
    }

    public getModelo(): string {
        return this._modelo;
    }

    public getColor(): string {
        return this._color;
    }

    public getRuedas(): number {
        return this._ruedas;

    }

    public printMarca() {
        console.log("Marca: " + this._color, this._marca);
    }

    public printModelo() {
        console.log("Modelo: " + this._modelo);
    }

    public printColor() {
        console.log("Color: " + this._color);
    }

    public printRuedas() {
        console.log("Ruedas: " + this._ruedas);
    }


}