import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  title: string = 'Listado app';
  borrado: boolean = false;
  guardar: boolean = false;
  heroeBorrado: string = '';
  heroeguardado: string = '';

  heroes: string[] = ['Spiderman', 'Superman', 'Iron Man'];

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    this.borrado= true;
  }

  guardarHeroe(heroeguardado: string){
    this.heroeguardado = heroeguardado;
    this.guardar = true;
  }

}
