import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styles: [
  ]
})
export class ListaClienteComponent implements OnInit {

  constructor(
    private clienteService:ClienteService,
    private router:Router
  ) { }

  get listaClientes(){
    return this.clienteService.listaClientes;
  }

  ngOnInit(): void {
    this.clienteService.consultaClientes();
  }

  irACrear(){
    this.router.navigateByUrl('/clientes/crear')
  }
}
