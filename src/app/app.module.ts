import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ServicesComponent } from './pages/services/services.component';
import { StylistsComponent } from './pages/stylists/stylists.component';
import { ProductsComponent } from './pages/products/products.component';
import { ChairRentalComponent } from './pages/chair-rental/chair-rental.component';
import { HomeComponent } from './pages/home/home.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ServicesComponent,
    StylistsComponent,
    ProductsComponent,
    ChairRentalComponent,
    HomeComponent,
    ThumbnailComponent,
    MainNavComponent,
    ErrorPageComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
