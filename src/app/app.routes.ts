import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//cadastro{
  import { TelaCadastroComponent } from './components/usuario/tela-cadastro/tela-cadastro.component';

//}


//telaInicial
  import { TelaInicialComponent } from './components/telaPadrao/tela-inicial/tela-inicial.component';
//}

//telaPrincipal (home)
  import { TelaPrincipalComponent } from './components/telaPadrao/tela-principal/tela-principal.component';
//

import path from 'path';
import { TelaMeusSonhosComponent } from './components/sonho/tela-meus-sonhos/tela-meus-sonhos.component';
import { TelaEscreveSonhoComponent } from './components/sonho/tela-escreve-sonho/tela-escreve-sonho.component';

export const routes: Routes = [

  {path: '', component: TelaInicialComponent},
  
  {path: 'cadastro', component: TelaCadastroComponent},

  {path: 'home', component:TelaPrincipalComponent},

  {path: 'escreverSonho', component:TelaEscreveSonhoComponent},

  {path: 'meusSonhos', component: TelaMeusSonhosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
