import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TelaInicialComponent } from "./components/tela-inicial/tela-inicial.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TelaInicialComponent]
})
export class AppComponent {
  title = 'Drim';

}
