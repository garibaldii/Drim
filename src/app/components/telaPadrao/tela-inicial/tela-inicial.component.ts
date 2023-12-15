import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({//passar informações adicionais ao compilador
  selector: 'app-tela-inicial',//utilização de webComponents
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent {

}
