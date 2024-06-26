import { Component, Host, HostBinding, Input, OnInit } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, OutletContext, Router } from '@angular/router';
import { filter } from 'rxjs';
import { slideInAnimation } from './shared/animations';
import { convertStringToCamelCase } from './shared/utilities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: { class: 'app-wrapper' },
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
  constructor(private router: Router, private contexts: ChildrenOutletContexts) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.isHomePage = event.url === '/';
    })
  }

  getAnimationPageName(): string {
    this.routeContext = this.contexts.getContext('primary');
    return convertStringToCamelCase((this.routeContext?.route?.snapshot?.data?.['animation']));
  }

  darkenPageContainer($event: boolean) {
    this.pageOverlayDarkened = $event;
  }
}
