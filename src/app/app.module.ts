import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { heroeModule } from './Heroes/heroe.module';
import { Heroeconponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';
import { MainpageComponent } from './dbz/mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    contadorModule,
    heroeModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [MainpageComponent]
})
export class AppModule { }
