import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../interfaces/cliente.interface';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-card-cliente',
  templateUrl: './card-cliente.component.html',
  styles:[`
  .dropdown-toggle::after {
    display: none;
}`]
})
export class CardClienteComponent implements OnInit {

  @Input() cliente!:Cliente;

  constructor(
    private clienteService:ClienteService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  irAEditar(cliente:Cliente){
    this.router.navigateByUrl('/clientes/editar');
    this.clienteService.obtenerCliente(cliente);
  }
  irACambiarE(cliente:Cliente){
    this.clienteService.cambiarEstadoCliente(cliente);
  }


}