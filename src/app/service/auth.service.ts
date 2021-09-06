import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ///para altenticar o usuario
  constructor(private http: HttpClient) {  }


   //variavel token verificando se o usuário está logado
token = {
  headers: new HttpHeaders().set('Authorization', environment.token)
}

//metodo de entrada do usuario
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{

    return this.http.post<UsuarioLogin>('https://bloghoradoterror.herokuapp.com/usuario/login', usuarioLogin);

  }

  //metodo de cadastrar o usuario
  cadastrar(usuario: Usuario): Observable<Usuario>{

    return this.http.post<Usuario>('https://bloghoradoterror.herokuapp.com/usuario/cadastrar', usuario);

  }

    //metodo de cadastrar o usuario
putUsuario(usuario: Usuario): Observable<Usuario>{

      return this.http.put<Usuario>('https://bloghoradoterror.herokuapp.com/usuario/alterar', usuario);
  
    }
  


  getBiIdUser(id:number): Observable<Usuario>{

    return this.http.get<Usuario>(`https://bloghoradoterror.herokuapp.com/usuario/${id}`, this.token);

  }
  
  logado(){

    let ok: boolean= false;

    if (environment.token != ''){

      ok=true;
      
    }

    return ok;

  }


  adm(){

    let ok: boolean= false;

    if (environment.tipo == 'adm'){

      ok=true;
      
    }

    return ok;

  }

  //fim service
}
