import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  login(usuario:string , contrasenia:string){  
    if( usuario.trim() === 'pilar' && contrasenia.trim() ==='1234'){
      localStorage.setItem('token', 'abc1234');
      return true;     
    }
    return false;
  }

  isAuthenticated(): boolean {
    if(localStorage.getItem('token') !== null){
      return true;
    }else{
      return false;
    }
  };

}