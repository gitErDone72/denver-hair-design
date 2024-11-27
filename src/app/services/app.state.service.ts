import { Injectable, signal, computed } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { filter, fromEvent } from "rxjs";
import { StateSliceBase as StateSliceBase } from "./state.slice.base";
import { NavigationEnd, Router } from "@angular/router";

export interface IAppState {
  windowWidth: number;
  isMobile: boolean;
  isHomePage: boolean;
}

@Injectable({providedIn: 'root'})
export class AppStateService extends StateSliceBase<IAppState> {
  windowWidth = signal<number>(window.innerWidth);
  isMobile = computed(() => this.windowWidth() < environment.beyondMobileWidth);
  isHomePage = signal<boolean>(true);

  constructor(private router: Router) {
    super();
    // no need to unsubscribe, we need to listen for the life of the app
    fromEvent(window, 'resize').subscribe(() => {
      this.windowWidth.set(window.innerWidth);
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage.set(event.url === '/');
      });
  }
}
