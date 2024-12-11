import { Component } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { CardProductComponent } from '../../componentes/card-product/card-product.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavBarComponent, CardProductComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
