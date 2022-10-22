import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PagInicialComponent } from './pag-inicial/pag-inicial.component';

const routes: Routes = [
  {path: '', component:PagInicialComponent},
  {path: 'dados', component:DadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
