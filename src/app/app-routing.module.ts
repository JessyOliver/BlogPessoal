import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //toda vez que o campo for vazio, redirecione para a tela logar
  {path:'', redirectTo:'entrar', pathMatch:'full'},

  //testando menu rodape
  {path:'menu', component:MenuComponent}, 
  {path:'rodape', component:RodapeComponent},

  //redirecionando para uma pagina especifica
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
