import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PagInicialComponent } from './pag-inicial/pag-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosComponent,
    TopBarComponent,
    PagInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
