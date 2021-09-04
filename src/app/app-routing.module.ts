import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditarComponent } from './edit/tema-editar/tema-editar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditarComponent } from './edit/postagem-editar/postagem-editar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';

const routes: Routes = [

  //toda vez que o campo for vazio, redirecione para a tela logar
  {path:'', redirectTo:'entrar', pathMatch:'full'},

  // //testando menu rodape
  // {path:'menu', component:MenuComponent}, 
  // {path:'rodape', component:RodapeComponent},

  //redirecionando para uma pagina especifica
  {path:'cadastrar', component: CadastrarComponent},

  {path:'entrar', component: EntrarComponent},
  {path:'inicio', component:InicioComponent },

  //parametro por rota para deletar e editar  
  {path:'tema', component:TemaComponent },
  {path:'tema-edit/:id', component: TemaEditarComponent},
  {path:'tema-delete/:id', component: TemaDeleteComponent},

  //parametro por rota para deletar e editar Postagem
  {path:'postagem-edit/:id', component: PostagemEditarComponent},
  {path:'postagem-delete/:id', component: PostagemDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
