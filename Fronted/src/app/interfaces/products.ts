export interface Products {
    image: string;      // URL o ruta de la imagen del producto (requerido)
    name: string;       // Nombre del producto (requerido)
    category?: string;  // Categoría del producto (opcional)
    price: number;      // Precio del producto (requerido)
    stock: number;      // Cantidad en stock (requerido)
    isAvailable?: boolean; // Disponibilidad del producto (opcional, puede ser true o false)
}
