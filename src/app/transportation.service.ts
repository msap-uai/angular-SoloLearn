import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
// crea una clase. exporta el servicio TransportationService
export class TransportationService {
  // declara objetos
   subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
   honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
   bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};

   // array que contiene los objetos
   cars:Car[] = [this.subaru, this.honda, this.bmw];

  // vacio usa el (archivo car.ts)
  constructor() { }

  //(getters and setters)
  //metodo que devuelve el array de objetos
  getCars() {
    return this.cars;
  }
  // metodo agregar un objeto que recibe como parametro un objeto tipo Car
  addCar(car: Car){
    this.cars.push(car);
  }
}