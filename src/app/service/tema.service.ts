import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) {  }

//variavel token
token = {

  headers: new HttpHeaders().set('Authorization', environment.token)

}


  //metodo de cadastrar o tema
  postTema(temaCadastro: Tema): Observable<Tema>{

    return this.http.post<Tema>('https://bloghoradoterror.herokuapp.com/tema', temaCadastro, this.token)
  }

 
//trazer todos os temas
getAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('https://bloghoradoterror.herokuapp.com/tema', this.token)
}

//campo com o conteudo a ser editado
getByIdTema(id: number){
  return this.http.get<Tema>(`https://bloghoradoterror.herokuapp.com/tema/${id}`, this.token)

}

//metodo alterar tema
putTema(temaEdit: Tema): Observable<Tema>{
  return this.http.put<Tema>('https://bloghoradoterror.herokuapp.com/tema', temaEdit, this.token)


}

//metodo alterar delete
deleteTema(id: number){

  return this.http.delete(`https://bloghoradoterror.herokuapp.com/tema/${id}`, this.token)

}

}
