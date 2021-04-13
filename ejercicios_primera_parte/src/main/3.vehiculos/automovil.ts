import { Vehiculo } from "../3.vehiculos/vehiculo";

export class Automovil extends Vehiculo {

    private _cilindrada: string;


    constructor(marca: string, modelo: string, color: string, ruedas: number, cilindrada: string) {
        super(marca, modelo, color, ruedas);
        this._cilindrada = cilindrada;
    }

    public printDescripcion() {
        console.log("AUTOMOVIL");
        console.log("Marca      : " + this.getMarca());
        console.log("Modelo     : " + this.getModelo());
        console.log("Color      : " + this.getColor());
        console.log("Ruedas     : " + this.getRuedas());
        console.log("Cilindrada : " + this._cilindrada);
    }






}