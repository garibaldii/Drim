import { UsuarioService } from './../shared/usuario.service';
import { Component, NgModule } from '@angular/core';
import { PadraoDrimComponent } from '../../telaPadrao/padrao-drim/padrao-drim.component';
import { ActivatedRoute, RouterModule, Route, Router } from '@angular/router';
import { Usuario } from '../shared/usuario';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-cadastro',
  standalone: true,
  imports: [PadraoDrimComponent, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.css',
})
export class TelaCadastroComponent {
  'usuario': Usuario;
  title = ' ';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.title = 'Novo Usuário';
    this.usuario = new Usuario();

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioService.getById(parseInt(id)).subscribe((resp) => {
        this.usuario = resp;
        this.title = `Alterando o usuário ${this.usuario.userName}`;
      });
    }
  }

  ngOnSubmit() {
    let observable: Observable<Usuario>;

    observable = this.usuarioService.insert(this.usuario);
    observable.subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }

  retornaList(): void {
    this.router.navigate(['usuarios']);
  }

  retornaSubmitList(): void {
    document
      .getElementById('btnSubmit')
      ?.addEventListener('submit', function (event) {
        window.location.href = 'usuarios';

        event.preventDefault();
      });
  }
}
