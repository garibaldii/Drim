import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//telaInicial
  import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import path from 'path';

export const routes: Routes = [

  
 

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {

}