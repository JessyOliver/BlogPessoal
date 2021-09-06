import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemServiceService } from 'src/app/service/postagem-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {



  postageDel: Postagem= new Postagem();
idPost:  number

  constructor(
    private router: Router, 
    private postagemService: PostagemServiceService,
    private route: ActivatedRoute,
    private alertas: AlertasService 
 

  ) { }

  ngOnInit(){
    window.scroll(0,0)
      //verificando se o usuario está logado
      if (environment.token == '') {
        // alert("Sua seção expirou, faça o login novamente.");
        this.router.navigate(['/entrar'])
      }

       //pegando o parametro da rota
      this.idPost= this.route.snapshot.params['id']
      this.findByIdPostagens(this.idPost)//função findByIdPostagens

  }

 ///postagens pegando o id
findByIdPostagens(id: number){
this.postagemService.getByIdPostagens(id).subscribe((resp: Postagem)=>{
  this.postageDel = resp
})
}

//atualizar postagem
apagar(){
//ai deleta a postagem
this.postagemService.deletePostagens(this.idPost).subscribe(()=>{
  this.alertas.showAlertSucess('Postagem deletada com sucesso!😉')
  this.router.navigate(['/inicio'])
})
}



}
