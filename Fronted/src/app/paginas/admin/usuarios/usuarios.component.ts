import { Component, inject } from '@angular/core';
import { User } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  // 1. injeccion de variables
  _dataService = inject(UsersService);

  // 2. variables
  allUsers: User[] = [];

  //obtener datos
  obtenerDatos() {
    this._dataService.getUsers().subscribe(
      {
        next: (res: any) => {
          // console.log(res.datos);
          this.allUsers = res.datos;
          console.log(this.allUsers)

        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

  modificarUsuario(id: string){
    console.log('id del usuario a modificar : ' +id);
  }

  borrarUsuario(id: string){
    console.log('id del usuario a eliminar : ' +id);
  }

  ngOnInit() {
    this.obtenerDatos(); 
  }
}
