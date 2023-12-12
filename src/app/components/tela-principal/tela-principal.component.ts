import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PadraoDrimComponent } from '../padrao-drim/padrao-drim.component';


@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [PadraoDrimComponent, BrowserModule],
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent {

}
