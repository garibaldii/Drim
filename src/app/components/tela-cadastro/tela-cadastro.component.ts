import { Component } from '@angular/core';
import { PadraoDrimComponent } from '../padrao-drim/padrao-drim.component';


@Component({
  selector: 'app-tela-cadastro',
  standalone: true,
  imports: [PadraoDrimComponent],
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.css'
})
export class TelaCadastroComponent {

}
