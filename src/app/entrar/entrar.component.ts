import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin : UsuarioLogin = new UsuarioLogin();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  ///tratamento d campo email
  validatePreenchido() {
    let usuario = <HTMLInputElement>document.getElementById('usuario');
    
    if (usuario?.value != '') {
      usuario.classList.add('preenchido');
      if (usuario.checkValidity()) {
        usuario.classList.add('valid');
        usuario.classList.remove('invalid');
        usuario.classList.remove('preenchido');
      } else {
        usuario.classList.remove('valid');
        usuario.classList.add('invalid');
      }
    } else {
      usuario.classList.remove('valid');
      usuario.classList.remove('preenchido');
    }
  }

  entrar(){

    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token

      environment.nome = this.usuarioLogin.nome

      environment.usuario = this.usuarioLogin.usuario

      environment.imagem_perfil = this.usuarioLogin.imagem_perfil

      environment.id = this.usuarioLogin.id

      //trazer todos os elementos espcificos 
  // console.log( environment )   
  //trazer apenas um elemento 
  // console.log( environment.nome )      
     


      this.router.navigate(['/inicio'])

    }, erro =>{

      if (erro.status == 500 || erro.status == 401) {
        alert('Usuário ou senha inválidos!')
        
      }
    }) 
  }

}
