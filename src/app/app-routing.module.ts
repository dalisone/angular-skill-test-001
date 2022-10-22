import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DadosComponent } from './dados/dados.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
  {path: '', component:InicialComponent},
  {path: 'dados', component:TabelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
