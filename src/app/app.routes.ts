import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },  // Redirige a la vista usuario por defecto
  { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'producto', loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule) },
  { path: 'pedido', loadChildren: () => import('./pedido/pedido.module').then(m => m.PedidoModule) },
  { path: 'detalle-pedido', loadChildren: () => import('./detalle-pedido/detalle-pedido.module').then(m => m.DetallePedidoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    FormsModule
  ]
})
export class AppRoutingModule { }
