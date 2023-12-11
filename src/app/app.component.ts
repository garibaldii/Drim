import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TelaInicialComponent } from "./components/tela-inicial/tela-inicial.component";
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TelaInicialComponent, TelaCadastroComponent]
})
export class AppComponent {
  title = 'Drim';

}
