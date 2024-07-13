import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, OutletContext, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { slideInAnimation } from './shared/animations';
import { convertStringToCamelCase } from './shared/utilities';
import { PageOverlayComponent } from './components/page-overlay/page-overlay.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: { class: 'app-wrapper' },
  imports: [RouterModule, CommonModule, PageOverlayComponent, MainNavComponent, FooterComponent, ErrorPageComponent],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  @HostBinding('class.app-page-name') overlayClassByPage: string = '/';
  routeContext: OutletContext | null = null;
  isHomePage: boolean = true;
  pageName: string = '/';
  pageOverlayDarkened: boolean = false;
  constructor(private router: Router, private contexts: ChildrenOutletContexts, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.isHomePage = event.url === '/';
    })
  }

  getAnimationPageName(): string {
    this.routeContext = this.contexts.getContext('primary');
    return this.routeContext !== null? convertStringToCamelCase((this.routeContext?.route?.snapshot?.data?.['animation'])) : '/';
  }

  darkenPageContainer($event: boolean) {
    this.pageOverlayDarkened = $event;
  }
}
