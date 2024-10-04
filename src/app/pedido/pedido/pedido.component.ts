import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  // Definimos el objeto pedido
  pedido = {
    id_pedido: '',
    id_detalle_pedido: '',
    hora_salida: '',
    hora_llegada: '',
    hora_tiempo_real: '',
    id_usuario: ''
  };

  submitted = false;

  // Función que se llama al enviar el formulario
  onSubmit() {
    this.submitted = true;
    console.log('Pedido guardado:', this.pedido);
  }
}
