import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//TelaValidação
import { TelaCadastroComponent } from './components/usuario/tela-cadastro/tela-cadastro.component';

//TelaInterativa
import { TelaInicialComponent } from "./components/telaPadrao/tela-inicial/tela-inicial.component";
import { TelaPrincipalComponent } from './components/telaPadrao/tela-principal/tela-principal.component';
import { TelaEscreveSonhoComponent } from './components/sonho/tela-escreve-sonho/tela-escreve-sonho.component';
import { PadraoDrimComponent } from './components/telaPadrao/padrao-drim/padrao-drim.component';
import { TelaMeusSonhosComponent } from './components/sonho/tela-meus-sonhos/tela-meus-sonhos.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HttpClientModule,CommonModule, RouterOutlet, TelaInicialComponent, TelaCadastroComponent, PadraoDrimComponent, TelaPrincipalComponent, TelaEscreveSonhoComponent, TelaMeusSonhosComponent]
})
export class AppComponent {
  title = 'Drim';

}
