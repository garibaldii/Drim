import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { PadraoDrimComponent } from '../padrao-drim/padrao-drim.component';


@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [PadraoDrimComponent],
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent {

}
