import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemServiceService } from 'src/app/service/postagem-service.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-editar',
  templateUrl: './postagem-editar.component.html',
  styleUrls: ['./postagem-editar.component.css']
})
export class PostagemEditarComponent implements OnInit {

  postageEdit: Postagem= new Postagem();

  temaEdit: Tema = new Tema();
  listarTemas: Tema[];
  idTema: number;

  constructor(
    private router: Router, 
    private postagemService: PostagemServiceService,
    private temaService: TemaService,
    private route: ActivatedRoute 

  ) { }

  ngOnInit(){
      //verificando se o usuario está logado
      if (environment.token == '') {
        // alert("Sua seção expirou, faça o login novamente.");
        this.router.navigate(['/entrar'])
      }

       //pegando o parametro da rota
      let id = this.route.snapshot.params['id']
      this.findByIdPostagens(id)//função findByIdPostagens

      //chamando a função findAllTemas para exibir todos os temas
      this.findAllTemas()
  }


//buscando os campos na tabela
findAllTemas(){
  this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
    //trazendo todos os temas
      this.listarTemas = resp
  })
}
//buscando todos os temas
findByIdTema(){
  this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
//buscando todos os ids tema
    this.temaEdit = resp
  })
}

 ///postagens pegando o id
findByIdPostagens(id: number){
this.postagemService.getByIdPostagens(id).subscribe((resp: Postagem)=>{
  this.postageEdit = resp
})
}

//atualizar postagem
atualizar(){
//id do tema
this.temaEdit.id = this.idTema
this.postageEdit.tema = this.temaEdit
//ai faz a postagem
this.postagemService.postPostagem(this.postageEdit).subscribe((resp: Postagem)=>{
  this.postageEdit = resp
  alert('Postagem cadastrada com sucesso!😉')
  this.router.navigate(['/inicio'])
})
}



}
