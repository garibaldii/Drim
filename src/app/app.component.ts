import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//TelaValidação
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';

//TelaInterativa
import { TelaInicialComponent } from "./components/tela-inicial/tela-inicial.component";
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaEscreveSonhoComponent } from './components/tela-escreve-sonho/tela-escreve-sonho.component';
import { PadraoDrimComponent } from './components/padrao-drim/padrao-drim.component';
import { TelaMeusSonhosComponent } from './components/tela-meus-sonhos/tela-meus-sonhos.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TelaInicialComponent, TelaCadastroComponent, PadraoDrimComponent, TelaPrincipalComponent, TelaEscreveSonhoComponent, TelaMeusSonhosComponent]
})
export class AppComponent {
  title = 'Drim';

}
