import { Component } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';

// configuramos el componente
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

// la clase
export class InicioComponent {

}
