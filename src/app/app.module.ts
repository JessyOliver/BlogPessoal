import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaComponent } from './tema/tema.component';
import { TemaEditarComponent } from './edit/tema-editar/tema-editar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditarComponent } from './edit/postagem-editar/postagem-editar.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { AlertaComponent } from './alerta/alerta.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    RodapeComponent,
    MenuComponent,
    CadastrarComponent,
    InicioComponent,
    TemaComponent,
    TemaEditarComponent,
    TemaDeleteComponent,
    PostagemDeleteComponent,
    PostagemEditarComponent,
    UserEditComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [ {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
