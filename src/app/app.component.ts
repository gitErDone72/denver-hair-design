import { Component, HostBinding, HostListener, OnInit, signal } from '@angular/core';
import {
  ChildrenOutletContexts,
  NavigationEnd,
  OutletContext,
  Router,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs';
import { slideInAnimation } from './shared/animations';
import { convertStringToCamelCase } from './shared/utilities';
import { MobileNavBlur } from './components/mobile-nav-blur/mobile-nav-blur.component';
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
  imports: [RouterModule, CommonModule, MobileNavBlur, MainNavComponent, FooterComponent, ErrorPageComponent, AsyncPipe],
  animations: [
    slideInAnimation
  ],
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onResize(_event: any): void {
    this.isWebWidthAndBeyond();
  }
  @HostBinding('class.app-page-name') overlayClassByPage: string = '/';
  isHomePage = signal<boolean>(true);
  isBeyondMobileWidth = signal<boolean>(false);
  isMobileNavOpen = signal<boolean>(false);

  routeContext: OutletContext | null = null;

  pageName: string = '/';
  constructor(private router: Router, private contexts: ChildrenOutletContexts) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage.set(event.url === '/');
      });
    this.isWebWidthAndBeyond();
    this.setHomePageBackgroundImage();
  }

  setHomePageBackgroundImage(): void {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const root = document.documentElement;
    root.style.setProperty('--app-background-image', `url('/assets/img/pages/home_${randomNumber}.jpg')`);
  }

  getAnimationPageName(): string {
    this.routeContext = this.contexts.getContext('primary');
    return this.routeContext !== null
      ? convertStringToCamelCase(
        this.routeContext?.route?.snapshot?.data?.['animation']
      )
      : '/';
  }

  togglePageForMobileNavigation($event: boolean) {
    if (!this.isBeyondMobileWidth()) {
      this.isMobileNavOpen.set($event)
    }
  }

  private isWebWidthAndBeyond(): void {
    this.isBeyondMobileWidth.set(window.innerWidth >= environment.beyondMobileWidth);
  }
}
