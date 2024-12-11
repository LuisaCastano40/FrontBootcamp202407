import { Component, inject } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductsService } from '../../services/products.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

  // 1. injeccion de variables
  _dataService = inject(ProductsService);

  // 2. variables
  allProducts: Products[] = [];

  //obtener datos
  obtenerDatos() {
    this._dataService.getProducts().subscribe(
      {
        next: (res: any)=>{
          console.log(res.datos);
          this.allProducts = res.datos;
          console.log(this.allProducts)
          
        },
        error: (err)=>{
          console.log(err);
        }
      }
    );
  }

  ngOnInit() {
    this.obtenerDatos(); 
  }


}
