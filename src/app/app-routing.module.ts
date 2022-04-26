import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsmComponent } from './productsm/productsm.component';

const routes: Routes = [
  {path:'',component:ProductsmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
