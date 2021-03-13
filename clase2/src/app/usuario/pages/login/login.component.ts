import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  hide=true;
  usuario     = '';
  contrasenia = '';


  constructor(
    private usuarioService:UsuarioService ,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(){  
    const consultaLogin = this.usuarioService.login( this.usuario , this.contrasenia );
    if( consultaLogin ){
      this.router.navigateByUrl('./clientes');
    }else{
      console.log('Error en autenticacion');
    }
  }

}
