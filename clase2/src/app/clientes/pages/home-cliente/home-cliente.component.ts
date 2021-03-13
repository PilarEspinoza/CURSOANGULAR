import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styles: [
  ]
})
export class HomeClienteComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  
  logout(): void{
    localStorage.removeItem('token');
    this.router.navigateByUrl('/usuario/login');
  }

}
