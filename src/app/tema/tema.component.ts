import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  constructor(
    private router: Router, private temaService: TemaService  ) { }

    temaCad: Tema = new Tema()
    listaTemas: Tema[]

  ngOnInit() {

    if (environment.token == '') {
      // alert("Sua seção expirou, faça o login novamente.");
      this.router.navigate(['/entrar'])
      
    }
    //trazer todos os temas
    this.findAllTemas();

  }
    //buscando os campos na tabela
    findAllTemas(){

      this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
  
          this.listaTemas = resp
  
      })
    }

    //cadastrar temas
  cadastrarTema(){

    this.temaService.postTema(this.temaCad).subscribe((resp: Tema) =>{

        this.temaCad = resp
        alert('Tema Cadastrado 😊')
        

        //apos realizar o cadastro Limpe os campos
        this.temaCad = new Tema()

        
        //depois atualize a nossa lista de temas
        this.findAllTemas()


    })
  }




}
