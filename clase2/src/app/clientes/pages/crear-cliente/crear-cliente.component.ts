import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { runInThisContext } from 'node:vm';
import { Cliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styles: [

  ]
})
export class CrearClienteComponent implements OnInit {
  constructor(
    private formBuilder : FormBuilder ,
    private clienteService:ClienteService,
    private router:Router
  ) { }

  miFormulario:FormGroup = this.formBuilder.group(
    {      
      id:[this.selectCliente.id],
      nombres:[this.selectCliente.nombres,[Validators.required , Validators.minLength(4)] ] , 
      apellidos:[this.selectCliente.apellidos,[Validators.required , Validators.minLength(4)] ] , 
      correo:[this.selectCliente.correo,[Validators.required ,  Validators.email] ] , 
      celular:[this.selectCliente.celular,[Validators.required , Validators.minLength(10) , Validators.maxLength(10) ] ] , 
      direccion:[this.selectCliente.direccion,[Validators.required , Validators.minLength(7)] ] , 
    }
  )
  
  errorCorreo():string{
    if( this.miFormulario.controls.correo.hasError('email')){
      return "Correo no es correcto."
    }
    return this.miFormulario.controls.correo.hasError('required')?'Campo obligatorio':'';
  }

  errorCampo(campo:string){
    if( this.miFormulario.controls[campo].hasError('minlength')){
      const minimo = this.miFormulario.controls[campo].getError('minlength').requiredLength;      
      return `Mínimo ${minimo} caracteres`;
    }
    return "Campo obligatorio **"
  }

  Guardar(){
    if(this.miFormulario.invalid){
      return;
    }
    if(this.selectCliente.id !=''){
      this.clienteService.editarCliente(this.miFormulario.value)
      .subscribe((res)=>{      
        this.router.navigateByUrl('/clientes')
      })
    }else{
      this.clienteService.registrarCliente(this.miFormulario.value)
      .subscribe((res)=>{      
        this.router.navigateByUrl('/clientes')
      })
    }
    this.selectCliente.id = '';
    this.selectCliente.nombres = '';
    this.selectCliente.apellidos = '';
    this.selectCliente.direccion = '';
    this.selectCliente.correo = '';
    this.selectCliente.celular = '';
  }

  get selectCliente(){
    return this.clienteService.ClienteSelect;
  }

  ngOnInit(): void {
    this.clienteService.obtenerCliente;
  }

}
