import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, HostBinding, HostListener, OnInit, signal } from '@angular/core';
import {
  ChildrenOutletContexts,
  NavigationEnd,
  OutletContext,
  Router,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { slideInAnimation } from './shared/animations';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: { class: 'app-wrapper' },
  imports: [RouterModule, CommonModule, MainNavComponent, FooterComponent, ErrorPageComponent, AsyncPipe],
  animations: [
    slideInAnimation
  ],
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event']) _onResize(_event: any): void {
    this.onResize();
  }

  @HostBinding('class.app-page-name') overlayClassByPage: string = '/';
  isHomePage = signal<boolean>(true);
  isMobileNavOpen = signal<boolean>(true);
  windowWidth = signal<number>(window.innerWidth);

  isMobile = computed(() => this.windowWidth() < environment.beyondMobileWidth);
  isMainNavCollapsed = computed(() => !this.isMobile() || (!this.isHomePage() && !this.isMobileNavOpen()));
  isMobileNavBlurred = computed(() => !this.isHomePage() && this.isMobile() && this.isMobileNavOpen());

  routeContext: OutletContext | null = null;

  constructor(private router: Router, private contexts: ChildrenOutletContexts) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage.set(event.url === '/');
      });
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
      ? this.routeContext?.route?.snapshot?.data?.['animation']
      : '/';
  }

  toggleMobileNavExpanded($event: boolean): void {
    this.isMobileNavOpen.set(this.isMobile() ? $event : false);
  }

  private onResize(): void {
    this.windowWidth.set(window.innerWidth);
    if (!this.isMobile()) {
      this.isMobileNavOpen.set(false);
    }
    this.toggleMobileNavExpanded(false);
  }
}



