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

const routes: Routes = [

  //toda vez que o campo for vazio, redirecione para a tela logar
  {path:'', redirectTo:'entrar', pathMatch:'full'},

  //testando menu rodape
  {path:'menu', component:MenuComponent}, 
  {path:'rodape', component:RodapeComponent},

  {path:'inicio', component:InicioComponent },

  {path:'tema', component:TemaComponent },


  //redirecionando para uma pagina especifica
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},

  //parametro por rota para deletar e editar
  {path:'tema-edit/:id', component: TemaEditarComponent},

  {path:'tema-delete/:id', component: TemaDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
