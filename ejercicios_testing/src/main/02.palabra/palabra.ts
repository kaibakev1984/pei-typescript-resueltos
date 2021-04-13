// NOTA: Usar en todas las implementaciones el atributo "palabra"

class Palabra {
    palabra: string;
    constructor(palabra: string) {
        this.palabra = palabra;
    }

    // Devuelve un booleano si una palabra es "capicua".
    public esCapicua(): boolean {
        for(let i = 0; i < this.palabra.length / 2; i++) {
            if(this.palabra[i] != this.palabra[this.palabra.length - i - 1]) {
                return false;
            }
        }
        return true;
    }

    // Devuelve un true si toda la palabra está escrita en mayúscula
    public esMayuscula(): boolean {
        return this.palabra.toUpperCase() == this.palabra;
    }

    // Devuelve true si palabra está en minúscula
    public esMinuscula(): boolean {
        return this.palabra.toLocaleLowerCase() == this.palabra;
    }

    // Devuelve palabra "invertida"
    // Ej: invertir("perro") ==> "orrep"
    public intertir(): string {
        let str = "";
        for(let i = 0; i < this.palabra.length; i++) {
            str = str + this.palabra[this.palabra.length - i - 1];
        }
        return str;
    }
}

export {Palabra}