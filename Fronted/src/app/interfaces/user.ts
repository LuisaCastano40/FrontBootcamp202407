export interface User {
    _id: string;
    fullName: string;  // Nombre completo del usuario
    email: string;     // Correo electrónico del usuario
    password: string;  // Contraseña del usuario
    role?: string; //No es obligatorio
}
