import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

 usuarioEdit: Usuario = new Usuario();
 idUsuario: number;
 confirmarSenha: string;
 tipoUsu: string;
 

constructor(    
    private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    private alertas: AlertasService 
  ) { }

 
  ngOnInit() {

    window.scroll(0,0)
    //verificando se o usuario está logado
    if (environment.token == '') {
      // alert("Sua seção expirou, faça o login novamente.");
      this.router.navigate(['/entrar'])
    }

    //pegando o parametro da rota
    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
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

findByIdUsuario(id: number){

  this.authService.getBiIdUser(id).subscribe((resp: Usuario)=>{
    this.usuarioEdit = resp
  })
}

confirmSenha(event: any){
  this.confirmarSenha = event.target.value

}

tipoUsuario(event: any){

  this.tipoUsu = event.target.value
}

atualizar(){

  this.usuarioEdit.tipo= this.tipoUsu;
 
    if (this.usuarioEdit.senha.length < 5) {
    
      this.alertas.showAlertInfo("A senha deve conter no minimo 5 caracteres.");
  
    } else {
  
      if (this.usuarioEdit.senha != this.confirmarSenha) {
  
        this.alertas.showAlertInfo("As senhas estão diferentes.");
        
      } else {
        this.authService.putUsuario(this.usuarioEdit).subscribe((resp: Usuario) =>{
  
          this.usuarioEdit = resp;
          this.router.navigate(["/inicio"])
          this.alertas.showAlertSucess("Usuário editado com sucesso! Faça seu login")
          environment.token=''
          environment.nome = ''
          environment.usuario = ''    
          environment.imagem_perfil = ''    
          environment.id = 0
  
          this.router.navigate(['/entrar'])
  
        })
      }
      
    } 
  
}

}
