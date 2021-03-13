import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Key } from 'selenium-webdriver';
import { __values } from 'tslib';
import { Cliente } from '../interfaces/cliente.interface';
import { EstadoPipe } from '../pipes/estado.pipe';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private _listaClientes:Cliente[] = [];
  private _clienteSelect:Cliente = {
    id:       '',
    nombres:   '',
    apellidos: '',
    celular:   '',
    direccion: '',
    correo:    '', 
  };

  get listaClientes(){
    return this._listaClientes;
  }

  get ClienteSelect(){
    return this._clienteSelect;
  }

  constructor(
    private http:HttpClient
  ) { }

  consultaClientes(){
    this.http.get<Cliente[]>('http://localhost:3001/clientes')
    .subscribe((res)=>{
      console.log('res ', res)
      this._listaClientes = res;
    })
  }

  obtenerCliente(cliente:Cliente){
      this._clienteSelect = cliente;
  }

  registrarCliente(cliente:Cliente){
    cliente.estado = true;
    return this.http.post<Cliente>('http://localhost:3001/clientes',cliente);
  }

  editarCliente(cliente:Cliente){
    cliente.estado = true;
    return this.http.put<Cliente>(`http://localhost:3001/clientes/${cliente.id}`,cliente);
  }

  cambiarEstadoCliente(cliente:Cliente){
    if(cliente.estado == true){
      cliente.estado = false;
    }else if(cliente.estado == false){
      cliente.estado = true;
    }
    this.http.put<Cliente>(`http://localhost:3001/clientes/${cliente.id}`,cliente)
    .subscribe((res)=>{
      console.log('res ', res)
    })
  }
}