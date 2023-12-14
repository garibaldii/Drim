import { Component } from '@angular/core';
import { PadraoDrimComponent } from '../padrao-drim/padrao-drim.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-tela-cadastro',
  standalone: true,
  imports: [PadraoDrimComponent, RouterModule],
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.css'
})
export class TelaCadastroComponent {

}
