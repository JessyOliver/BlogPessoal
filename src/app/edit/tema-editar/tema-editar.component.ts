import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-editar',
  templateUrl: './tema-editar.component.html',
  styleUrls: ['./tema-editar.component.css']
})
export class TemaEditarComponent implements OnInit {

  temaTras: Tema = new Tema();

  constructor(
      private temaService: TemaService, 
      private router: Router, 
      private route: ActivatedRoute,
      private alertas: AlertasService 
 
    ) { }

  ngOnInit() {

    //verificando se o usuario está logado
    if (environment.token == '') {
      // alert("Sua seção expirou, faça o login novamente.");
      this.router.navigate(['/entrar'])
    }

    //pegando o parametro da rota
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }


 findByIdTema(id: number){
  this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{

    this.temaTras = resp

  })

  }


  atualizar(){

    this.temaService.putTema(this.temaTras).subscribe((resp: Tema)=>{

        this.temaTras= resp
        this.alertas.showAlertSucess('Tema atualizado com sucesso😁')
        this.router.navigate(['/tema'])
    }, erro =>{
      if (erro.status == 500 || erro.status == 400) {
        this.alertas.showAlertInfo('O seu Tema deve conter, no minimo 10 caracteres, para atualizar!')
        
      }
    })

  }

}
