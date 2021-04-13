import { Calculadora } from '../main/1.calculadora/calculadora'


// Crear la clase Calculadora con funciones para sumar,restar,multiplicar y dividir 2 numeros

const calculadora: Calculadora = new Calculadora();

calculadora.sumar(5,100);
calculadora.restar(10,1);
calculadora.multiplicar(1574,14);
calculadora.dividir(10,2);




// Crear la clase calculadora con funcion para sumar un arreglo de numeros
const numeros: number[] = [10,30,50,2,8];
calculadora.sumarArray(numeros);



