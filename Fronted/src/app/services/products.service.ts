import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 // inyección de dependencias
 private httpClient = inject(HttpClient);
 private URL_PRODUCTS = 'http://localhost:9000/productos';

 // OBTENER PRODUCTOS
 getProducts() {
  return this.httpClient.get(`${this.URL_PRODUCTS}/obtener`);
}

// CREAR PRODUCTO
postProduct(product: Products) {
  return this.httpClient.post(`${this.URL_PRODUCTS}/crear`, product);
}

// ACTUALIZAR PRODUCTO
putProduct(productUpdated: Products, id: string) {
  return this.httpClient.put(`${this.URL_PRODUCTS}/actualizar/${id}`, productUpdated);
}

// ELIMINAR PRODUCTO
deleteProduct(id: string, options?: any) {
  return this.httpClient.delete(`${this.URL_PRODUCTS}/eliminar/${id}`, options);
}

}
