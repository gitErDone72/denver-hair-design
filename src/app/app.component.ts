import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {
  ActivatedRoute,
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
import { ModalService } from './services/modal.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: { class: 'app-wrapper' },
  imports: [RouterModule, CommonModule, MobileNavBlur, MainNavComponent, FooterComponent, ErrorPageComponent, AsyncPipe],
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
  isBeyondMobileWidth: boolean = false;
  pageName: string = '/';
  isMoblieNavOpen: boolean = false;
  constructor(private router: Router, private contexts: ChildrenOutletContexts, private _activatedRoute: ActivatedRoute, private modalService: ModalService) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage = event.url === '/';
      });
    this.isWebWidthAndBeyond();
    this.setHomePageBackgroundImage();
  }

  /**
   * Sets the background image of the home page to a random image.
   *
   * This function generates a random number between 1 and 5, inclusive,
   * and sets the CSS variable `--app-background-image` to the URL of
   * an image corresponding to that random number. The images are
   * expected to be located in the `/assets/img/pages/` directory and
   * named in the format `home_<randomNumber>.jpg`.
   */
  setHomePageBackgroundImage(): void {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const root = document.documentElement;
    root.style.setProperty('--app-background-image', `url('/assets/img/pages/home_${randomNumber}.jpg')`);
  }

  /**
   * Retrieves the animation page name from the current route context.
   *
   * @returns {string} The animation page name in camel case if available, otherwise '/'.
   */
  getAnimationPageName(): string {
    this.routeContext = this.contexts.getContext('primary');
    return this.routeContext !== null
      ? convertStringToCamelCase(
        this.routeContext?.route?.snapshot?.data?.['animation']
      )
      : '/';
  }

  /**
   * Toggles the state of the mobile navigation.
   *
   * @param $event - A boolean value indicating whether the mobile navigation should be open or closed.
   */
  togglePageForMobileNavigation($event: boolean) {
    this.isMoblieNavOpen = $event;
  }

  // TODO: consider renaming this to something more relevant to navigation change
  // what else does this govern / relate to?
  isWebWidthAndBeyond(): void {
    this.isBeyondMobileWidth = window.innerWidth >= environment.beyondMobileWidth;
    // this.isMoblieNavOpen = !this.isBeyondMobileWidth;
    this.isMoblieNavOpen = false;
  }
}
