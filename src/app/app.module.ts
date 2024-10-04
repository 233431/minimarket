import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';  // Importa el módulo de enrutamiento principal
import { AppComponent } from './app.component';           // Importa el componente raíz
import { PedidoComponent } from './pedido/pedido.component'; 
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

@NgModule({
  declarations: [
     // Declara el componente raíz de la aplicación
  ],
  imports: [
    BrowserModule,     
    AppRoutingModule    
  ],
  providers: [],        
  bootstrap: []  
})
export class AppModule { }
