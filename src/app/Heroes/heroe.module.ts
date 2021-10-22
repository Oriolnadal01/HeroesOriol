import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Heroeconponent } from "./Heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations: [
        Heroeconponent,
        ListadoComponent
    ],

    exports: [
        Heroeconponent,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class heroeModule {

}