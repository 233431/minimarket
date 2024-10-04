import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent {
  // Definimos el objeto detallePedido
  detallePedido = {
    id_pedido: '',
    id_producto: '',
    total_productos: 0
  };

  submitted = false;

  // Función que se llama al enviar el formulario
  onSubmit() {
    this.submitted = true;
    console.log('Detalle Pedido guardado:', this.detallePedido);
  }
}
