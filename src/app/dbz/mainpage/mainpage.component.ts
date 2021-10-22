import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent{
  personajes: Personaje[] = [Personaje1, Personaje2];
  nombre: string = '';
  poder: number = 0;

  guardar(){
    let personaje: Personaje = {nombre:this.nombre, poder:this.poder   }
    this.personajes.push(personaje)
  }

}

interface Personaje {
  nombre: String;
  poder: Number;
}

let Personaje1:Personaje = {
    nombre : 'Goku',
    poder : 10
  };

let Personaje2:Personaje = {
    nombre : 'Vegeta',
    poder : 10
  };
