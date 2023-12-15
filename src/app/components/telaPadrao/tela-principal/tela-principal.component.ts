import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PadraoDrimComponent } from '../padrao-drim/padrao-drim.component';
import { Router } from 'express';


@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [PadraoDrimComponent, RouterModule],
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent {

}
