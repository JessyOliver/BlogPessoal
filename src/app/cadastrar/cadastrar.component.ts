import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario} from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuarioCad: Usuario = new Usuario;
  confirmarSenha: string;
  tipoUsuario: string;

  constructor( 
               private authService: AuthService, 
               private router: Router,
               private alertas: AlertasService 
  ) { }

  

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

  confirmSenha(event: any){

    this.confirmarSenha = event.target.value

  }

  tipoUser(event: any){

    this.tipoUsuario = event.target.value

  }


  cadastrar(){

    this.usuarioCad.tipo = this.tipoUsuario;

    if (this.usuarioCad.senha.length < 5) {
      
      this.alertas.showAlertInfo("A senha deve conter no minimo 5 caracteres.");

    } else {

      if (this.usuarioCad.senha != this.confirmarSenha) {

        this.alertas.showAlertDanger("As senhas estão diferentes.");
        
      } else {
        this.authService.cadastrar(this.usuarioCad).subscribe((resp: Usuario) =>{
  
          this.usuarioCad = resp;
          this.router.navigate(["/entrar"])
          this.alertas.showAlertSucess("Usuário Cadastrado com sucesso!")
        })
      }
      
    }    

  }

}
