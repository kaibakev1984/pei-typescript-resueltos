
export class Calculadora {


    public sumar(numero1: number, numero2: number) {
        var resultado = numero1 + numero2;
        console.log("---------------------------------------");
        console.log("SUMA");
        console.log("---------------------------------------");
        console.log("numero1: "+ numero1);
        console.log("numero2: "+ numero2);
        console.log("resultado: "+ resultado);
        console.log("---------------------------------------");
     
        
    }

    public restar(numero1: number, numero2: number) {
        var resultado = numero1 - numero2;
        
        console.log("---------------------------------------");
        console.log("RESTA");
        console.log("---------------------------------------");
        console.log("numero1: "+ numero1);
        console.log("numero2: "+ numero2);
        console.log("resultado: "+ resultado);
        console.log("---------------------------------------");
    }

    public multiplicar(numero1: number, numero2: number) {
        var resultado = numero1 * numero2;
       
        console.log("---------------------------------------");
        console.log("MULTIPLICACION");
        console.log("---------------------------------------");
        console.log("numero1: "+ numero1);
        console.log("numero2: "+ numero2);
        console.log("resultado: "+ resultado);
        console.log("---------------------------------------");
    }


    public dividir(numero1: number, numero2: number) {
        var resultado = numero1 / numero2;
        
        console.log("---------------------------------------");
        console.log("DIVISION");
        console.log("---------------------------------------");
        console.log("numero1: "+ numero1);
        console.log("numero2: "+ numero2);
        console.log("resultado: "+ resultado);
        console.log("---------------------------------------");
    }

    public sumarArray(numeros:number[]) {
        var total = 0;
        numeros.forEach(function sumarNumero(numero) {
            total += numero;
        });
        console.log("---------------------------------------");
        console.log("SUMA DE ARREGLO DE NUMEROS");
        console.log("---------------------------------------");
        console.log("La suma de los número del array es es: "+ total);
        console.log("---------------------------------------");
    }

}