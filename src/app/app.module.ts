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
import { faInfoSquare, faMapMarkerAlt, faPhoneRotary } from '@fortawesome/pro-solid-svg-icons';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
    FontAwesomeModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(
      faPhoneRotary,
      faInstagram,
      faFacebook,
      faMapMarkerAlt,
      faSearch,
      faInfoSquare
    )
  }
}
