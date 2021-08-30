import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
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

  //metodo de entrada do usuario
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{

    return this.http.post<UsuarioLogin>('https://bloghoradoterror.herokuapp.com/usuario/login', usuarioLogin)

  }

  //metodo de cadastrar o usuario
  cadastrar(usuario: Usuario): Observable<Usuario>{

    return this.http.post<Usuario>('https://bloghoradoterror.herokuapp.com/usuario/cadastrar', usuario)

  }
  
  logado(){

    let ok: boolean= false;

    if (environment.token != ''){

      ok=true;
      
    }

    return ok;

  }


  //fim service
}
