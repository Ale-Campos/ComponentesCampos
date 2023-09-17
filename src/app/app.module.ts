import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
