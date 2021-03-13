import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    NgMaterialModule,
    FormsModule
  ]
})
export class UsuarioModule { }
