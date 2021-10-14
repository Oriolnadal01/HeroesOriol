import { Component } from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador app';
  numero: number= 0;

  base:number = 5;

  calcular(numero: number){
    this.numero += numero;
  }
}
