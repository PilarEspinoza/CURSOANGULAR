import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoPipe'
})
export class EstadoPipe implements PipeTransform {

  transform(value: boolean | undefined ): string {
    return value?"Activo":"Inactivo"
  }
}