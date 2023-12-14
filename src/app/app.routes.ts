import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//cadastro{
  import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';

//}


//telaInicial
  import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
//}

//telaPrincipal (home)
  import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
//

import path from 'path';
import { TelaMeusSonhosComponent } from './components/tela-meus-sonhos/tela-meus-sonhos.component';
import { TelaEscreveSonhoComponent } from './components/tela-escreve-sonho/tela-escreve-sonho.component';

export const routes: Routes = [

  {path: '', component: TelaInicialComponent},
  {path: 'cadastro', component: TelaCadastroComponent},

  {path: 'home', component:TelaPrincipalComponent},

  {path: 'escreverSonho', component:TelaEscreveSonhoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
