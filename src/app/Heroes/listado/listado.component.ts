import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  title: string = 'Listado app';
  borrado: boolean = false;
  heroeBorrado: string = '';

  heroes: string[] = ['Spiderman', 'Superman', 'Iron Man'];

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    this.borrado= true;
  }

}
