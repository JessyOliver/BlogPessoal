import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome;
  foto_perfil = environment.imagem_perfil;
  id = environment.id;

  constructor( private router : Router) { }

  ngOnInit() {

  }


  sair(){

    this.router.navigate(['/entrar'])
    
    environment.token = ''

    environment.nome = ''

    environment.usuario = ''

    environment.imagem_perfil = ''

    environment.id = 0
  }

}
