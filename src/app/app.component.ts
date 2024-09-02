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
    this.isMoblieNavOpen = $event;
  }

  // TODO: consider renaming this to something more relevant to navigation change
  // what else does this govern / relate to?
  isWebWidthAndBeyond(): void {
    this.isBeyondMobileWidth = window.innerWidth >= environment.beyondMobileWidth;
    if (this.isBeyondMobileWidth) {
      this.isMoblieNavOpen = false;
    }
  }
}
