import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { ListaClienteComponent } from './pages/lista-cliente/lista-cliente.component';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';

const routes:Routes=[
  {
    path:'', component:HomeClienteComponent,
    children:[
      {
        path:'listar', component:ListaClienteComponent
      },
      {
        path:'crear', component:CrearClienteComponent
      },      
      {
        path:'editar', component:CrearClienteComponent
      },
      {
        path:'**',redirectTo:'listar'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ClientesRoutingModule { }
