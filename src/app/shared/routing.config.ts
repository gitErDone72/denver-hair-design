import { Route } from "@angular/router";
import { DhdNavDataItem } from "../components/main-nav/nav-item.model";
import { ChairRentalComponent } from "../pages/chair-rental/chair-rental.component";
import { ErrorPageComponent } from "../pages/error-page/error-page.component";
import { GalleryComponent } from "../pages/gallery/gallery.component";
import { HomeComponent } from "../pages/home/home.component";
import { ProductsComponent } from "../pages/products/products.component";
import { ServicesComponent } from "../pages/services/services.component";
import { StylistsComponent } from "../pages/stylists/stylists.component";

export interface DhdRoute extends Route {
    data: DhdNavDataItem
}

export const DhdNavRoutes: DhdRoute[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
            buttonLabel: '', routerLink: '/', animation: 'homePage',
            showInNav: false
        }
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
            buttonLabel: '', routerLink: '/', animation: 'homePage',
            showInNav: false
        }
    },
    {
        path: 'stylists',
        component: StylistsComponent,
        pathMatch: 'full',
        data: {
            buttonLabel: 'Stylists', routerLink: '/stylists', animation: 'stylistsPage',
            showInNav: true
        }
    },
    {
        path: 'services',
        component: ServicesComponent,
        pathMatch: 'full',
        data: {
            buttonLabel: 'Services', routerLink: '/services', animation: 'servicesPage',
            showInNav: true
        }
    },
    {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'full',
        data: {
            buttonLabel: 'Products', routerLink: '/products', animation: 'productsPage',
            showInNav: true
        }
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        pathMatch: 'full',
        data: {
            buttonLabel: 'Gallery', routerLink: '/gallery', animation: 'galleryPage',
            showInNav: true
        }
    },
    {
        path: 'chair-rental',
        component: ChairRentalComponent,
        pathMatch: 'full',
        data: {
            buttonLabel: 'Chair Rental', routerLink: '/chair-rental', animation: 'chairRentalPage',
            showInNav: true
        }
    },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: {
            buttonLabel: '', routerLink: '', message: 'Page not found!',
            showInNav: false
        }
    },
    {
        path: '**',
        redirectTo: '/not-found',
        data: {
            showInNav: false
        }
    }
];