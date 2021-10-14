import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  title: string = 'Listado app';

  heroes: string[] = ['Spiderman', 'Superman', 'Iron Man'];

}
