import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from './car';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
// componente que interactua con el front
export class AppComponent  {
  // expone el array cars para que pueda ser itinerado
  cars: Car[];
  //variables
  make: string;
  model: string;
  miles: number;

  // recibe un objeto del tipo trasportationservices
  constructor (private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }

  // agrega un objeto
  addCar(){
    //recibe del front
    const newCar: Car = {make: this.make, model: this.model, miles: this.miles };
    // agrega el objeto
    this.transportationService.addCar(newCar);
  }
  addCarTesla(){
    // crea el objeto
    const newCar: Car = {make: "Tesla", model: "Model X", miles: 100 };
    // agrega el objeto
    this.transportationService.addCar(newCar);
  }
}
