import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  // es lo que usamos para llamar nuestro componente reutilizable en el HTML
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

// Exportamos el componente a otras paginas
export class NavBarComponent {

}
