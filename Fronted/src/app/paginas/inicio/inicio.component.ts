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

  // Es un hook del ciclo de vida de Angular que se ejecuta después de que Angular haya inicializado las propiedades de un componente. Es el lugar adecuado para colocar lógica que debería ejecutarse cuando el componente se ha inicializado.
  ngOnInit(): void {
    console.log('hola');
  }
}
