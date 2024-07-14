import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, OutletContext, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { slideInAnimation } from './shared/animations';
import { convertStringToCamelCase } from './shared/utilities';
import { PageOverlayComponent } from './components/page-overlay/page-overlay.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { environment } from 'src/environments/environment.development';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: { class: 'app-wrapper' },
  imports: [RouterModule, CommonModule, PageOverlayComponent, MainNavComponent, FooterComponent, ErrorPageComponent, AsyncPipe],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onResize(_event: any): void {
    this.isWebWidthAndBeyond();
  }
  @HostBinding('class.app-page-name') overlayClassByPage: string = '/';
  routeContext: OutletContext | null = null;
  isHomePage: boolean = true;
  isWebWidthNBeyond: boolean = false;
  pageName: string = '/';
  pageBlurredForMobileNavigation: boolean = false;
  constructor(private router: Router, private contexts: ChildrenOutletContexts, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.isHomePage = event.url === '/';
    });
    this.isWebWidthAndBeyond();
  }

  getAnimationPageName(): string {
    this.routeContext = this.contexts.getContext('primary');
    return this.routeContext !== null ? convertStringToCamelCase((this.routeContext?.route?.snapshot?.data?.['animation'])) : '/';
  }

  togglePageForMobileNavigation($event: boolean) {
    this.pageBlurredForMobileNavigation = $event;
  }

  isWebWidthAndBeyond(): void {
    this.isWebWidthNBeyond = window.innerWidth >= environment.webWidthNBeyond;
    if (this.isWebWidthNBeyond) {
      this.pageBlurredForMobileNavigation = false;
    }
  }
}
