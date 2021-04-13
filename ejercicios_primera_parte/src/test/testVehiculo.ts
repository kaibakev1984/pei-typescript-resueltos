import { Automovil } from '../main/3.vehiculos/automovil';

//Crear la clase automovil que herede de la clase vehiculo, donce:
// clase vehiculo: Marca, modelo, color, ruedas
// clase automovil: cilindrada
// Usar una funcion de la clase automovil para que muestre la descripción del automovil
 
const automovil: Automovil = new Automovil("Kia", "Rio", "negro", 4, "120HP");
automovil.printDescripcion();



