import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductListComponent } from './pages/product-list/product-list.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products', component: ProductListComponent},
  {path:'product/:id', component: DetailsProductComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
