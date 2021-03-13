import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { ListaClienteComponent } from './pages/lista-cliente/lista-cliente.component';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { CardClienteComponent } from './components/card-cliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { EstadoPipe } from './pipes/estado.pipe';



@NgModule({
  declarations: [HomeClienteComponent, ListaClienteComponent, CrearClienteComponent,CardClienteComponent,EstadoPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    NgMaterialModule,
    ClientesRoutingModule,
  ]
})
export class ClientesModule { }
