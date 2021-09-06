import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemServiceService } from '../service/postagem-service.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nome = environment.nome;


  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  //estrangeiras
  temaFK: Tema = new Tema()
  listaTemas: Tema[]
  idTema:number

  usuarioFK: Usuario = new Usuario()
  idUser = environment.id


  //ordenar postagem
  key = 'data'
  reverse = true

  //busca por titulo
  tituloPost: string

  //busca por descrição tema
  temaDescricao: string


  constructor(
    private router: Router, 
    private temaService: TemaService, 
    public authService : AuthService,
    private postagemService:PostagemServiceService,
    private alertas: AlertasService 
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == '') {
      // alert("Sua seção expirou, faça o login novamente.");
      this.router.navigate(['/entrar']);
      
    }
     //trazer todos os temas
    this.findAllTemas();
    
    this.getAllPostagens();

  }
    //buscando os campos na tabela
    findAllTemas(){
      this.temaService.getAllTema().subscribe((resp: Tema[]) =>{  
          this.listaTemas = resp  
      })
    }

    findByIdTema(){
      this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{    
        this.temaFK = resp    
      })
    }

//usuario
findByIdUsu(){
  this.authService.getBiIdUser(this.idUser).subscribe((resp: Usuario)=>{
    this.usuarioFK = resp
  })
}

//postagem
publicar(){
//id do tema
  this.temaFK.id = this.idTema
  this.postagem.tema = this.temaFK

  //id do usuario
  this.usuarioFK.id = this.idUser
  this.postagem.usuario = this.usuarioFK
    
  //ai faz a postagem
  this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
    this.postagem = resp
    this.alertas.showAlertSucess('Postagem cadastrada com sucesso!😉')
    this.postagem = new Postagem()
    this.getAllPostagens()
  })

}

//trazer todas as postagens
getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
    }, erro =>{
      
      if (erro.status == 500 || erro.status == 400) {
        this.alertas.showAlertInfo('O seu titulo deve conter, no minimo 5 caracteres, e o campo texto deve ter no minimo 10 caracteres para cadastrar!')
        
      }
    })
}

//busca por titulo
findByTituloPostagem(){

  if(this.tituloPost == ''){
    this.getAllPostagens()
  }
  else{
    this.postagemService.getByIdTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })

  }
}

findByTemaDscricao(){

  if (this.temaDescricao == '') {
    this.getAllPostagens()
    
  } else {
    this.temaService.getByIdTemaDescricao(this.temaDescricao).subscribe((resp: Tema[])=>{

      this.listaTemas = resp
    })
    
  }
}

}
