import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Contadorconponent } from "./contador.component";


@NgModule({
    declarations: [
        Contadorconponent
    ],

    exports: [
        Contadorconponent
    ],
    imports: [
        CommonModule
    ]
})
export class contadorModule {

}