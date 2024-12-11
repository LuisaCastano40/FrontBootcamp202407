import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
// import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';


@Component({
  // es lo que usamos para llamar nuestro componente reutilizable en el HTML
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

// Exportamos el componente a otras paginas
export class NavBarComponent {

  // 1. Injección de dependencias
  _loginService = inject(LoginService);


  // 2. variables
  isLogged = this._loginService.isLogged();


  handdleLogout(){
    this._loginService.logout();
  }


}
