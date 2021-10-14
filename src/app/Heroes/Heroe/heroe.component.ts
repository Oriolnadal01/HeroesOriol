import { Component } from "@angular/core";

@Component({
    selector: 'heroe-component',
    templateUrl: './heroe.component.html',
})

export class Heroeconponent{
    title: string = 'Heroe app';
    nombre: string= 'Iron Man';
    edad:number = 25;


    cambiarnombre(){
      this.nombre = 'Spiderman';
    }

    concatenar(){
      return this.nombre+this.edad;
    }

    cambiaredad(){
      this.edad = 85;
    }

    mayusculas(){
      return this.nombre.toUpperCase();
    }
}