export interface User {
    fullName: string;  // Nombre completo del usuario
    email: string;     // Correo electrónico del usuario
    password: string;  // Contraseña del usuario
    role?: string; //No es obligatorio
}
