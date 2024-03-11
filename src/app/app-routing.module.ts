import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChairRentalComponent } from './pages/chair-rental/chair-rental.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { StylistsComponent } from './pages/stylists/stylists.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { animation: 'homePage' }
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    data: { animation: 'homePage' }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    pathMatch: 'full',
    data: { animation: 'galleryPage' }
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full',
    data: { animation: 'productsPage' }
  },
  {
    path: 'chair-rental',
    component: ChairRentalComponent,
    pathMatch: 'full',
    data: { animation: 'chairRentalPage' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    pathMatch: 'full',
    data: { animation: 'servicesPage' }
  },
  {
    path: 'stylists',
    component: StylistsComponent,
    pathMatch: 'full',
    data: { animation: 'stylistsPage' }
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    pathMatch: 'full',
    data: { animation: 'stylistsPage' }
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' }
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
