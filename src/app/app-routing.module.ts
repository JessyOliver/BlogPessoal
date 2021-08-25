import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //toda vez que o campo for vazio, redirecione para a tela logar
  {path:'', redirectTo:'entrar', pathMatch:'full'},

  //redirecionando para uma pagina especifica
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
