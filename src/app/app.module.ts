import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsmComponent } from './productsm/productsm.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [AppComponent, ProductsmComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
