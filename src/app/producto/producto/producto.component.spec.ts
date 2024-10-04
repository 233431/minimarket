import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  // Definimos el objeto producto
  producto = {
    id_producto: '',
    nombre_producto: '',
    descripcion: '',
    precio: 0,
    cantidad_disponible: 0,
    categoria: '',
    id_usuario: ''
  };

  submitted = false;

  // Función que se llama al enviar el formulario
  onSubmit() {
    this.submitted = true;
    console.log('Producto guardado:', this.producto);
  }
}
