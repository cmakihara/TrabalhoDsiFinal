import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ConsultarComponent,
    DeletarComponent,
    AtualizarComponent,
    ContatoComponent

  ],
  imports: [
    BrowserModule,
     ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
