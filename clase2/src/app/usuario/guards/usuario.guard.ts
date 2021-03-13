import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate,CanActivateChild {
  constructor(private authService: UsuarioService, private router: Router) { }

  canActivate(){
    if(this.authService.isAuthenticated() != true){
      this.router.navigateByUrl('/usuario/login');
      return false;
    }
    return true;
  }
   canActivateChild():boolean{
     return this.canActivate();
   }


}
