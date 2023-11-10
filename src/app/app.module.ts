import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { ChairRentalComponent } from './pages/chair-rental/chair-rental.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { StylistsComponent } from './pages/stylists/stylists.component';

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
