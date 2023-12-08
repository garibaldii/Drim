import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routes';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';
import { AppComponent } from './app.component';


@NgModule({//
    declarations: [//listar todos os componentes, diretivas e pipes que serão usados dentro de app.modulo
  

    ],
    imports: [//outros módulos que serão necessários ser utilizados no appComponent
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule

    ],
    providers: [ // colocar os serviços que serão utilizados por todos os componentes que estão listados no appComponent
                //exemplo, serviços de autenticação, login, guardas de rotas, etc. Serviços a serem compartilhados por componentes
                //importados do appComponent. 
    
    ],
    bootstrap: []//componente que deve ser instanciado ao executar a aplicação, 
  })


  export class AppModule { }