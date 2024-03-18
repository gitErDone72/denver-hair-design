import { Component, HostBinding, OnInit } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, OutletContext, Router } from '@angular/router';
import { filter } from 'rxjs';
import { slideInAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  @HostBinding('class.app-wrapper') appWrapper = true;
  isHomePage: boolean = true;
  constructor(private router: Router, private contexts: ChildrenOutletContexts) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.isHomePage = event.url === '/';
    })
  }

  getRouteAnimationData() : OutletContext | null {
    const context: OutletContext = this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    console.log('context: ', context);
    return context;
  }

}
