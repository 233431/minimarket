import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

const routes: Routes = [
  { path: 'detalle-pedido', component: DetallePedidoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallePedidoRoutingModule { }
