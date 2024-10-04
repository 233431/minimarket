import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  // Definimos el objeto usuario
  usuario = {
    id_usuario: '',
    nombre: '',
    email: '',
    direccion: ''
  };

  submitted = false;

  // Función que se llama al enviar el formulario
  onSubmit() {
    this.submitted = true;
    console.log('Usuario guardado:', this.usuario);
  }
}
