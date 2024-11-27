import { AsyncPipe, CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import {
  ChildrenOutletContexts,
  OutletContext,
  RouterModule,
} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { slideInAnimation } from './shared/animations';
import { AppStateService, IAppState } from './services/app.state.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: { class: 'app-wrapper' },
  imports: [
    RouterModule,
    CommonModule,
    MainNavComponent,
    FooterComponent,
    ErrorPageComponent,
    AsyncPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  // can likely get rid of this host binding
  @HostBinding('class.app-page-name') overlayClassByPage: string = '/';
  appState!: Signal<IAppState>;
  isMobileNavOpen = signal<boolean>(true);
  isMainNavCollapsed = computed(
    () => !this.appStateService.select('isMobile') || (!this.appStateService.select('isHomePage') && !this.isMobileNavOpen())
  );
  isMobileNavBlurred = computed(
    () => !this.appStateService.select('isHomePage') && this.appStateService.select('isMobile') && this.isMobileNavOpen()
  );

  routeContext: OutletContext | null = null;

  constructor(
    private contexts: ChildrenOutletContexts,
    public appStateService: AppStateService
  ) { }

  ngOnInit(): void {
    this.appState = this.appStateService.stateForT;
    this.setHomePageBackgroundImage();
    this.appStateService.isMobile()
  }

  setHomePageBackgroundImage(): void {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const root = document.documentElement;
    root.style.setProperty(
      '--app-background-image',
      `url('/assets/img/pages/home_${randomNumber}.jpg')`
    );
  }

  getAnimationPageName(): string {
    window.scrollTo(0, 1);
    this.routeContext = this.contexts.getContext('primary');
    return this.routeContext !== null
      ? this.routeContext?.route?.snapshot?.data?.['animation']
      : '/';
  }

  toggleMobileNavExpanded($event: boolean): void {
    this.isMobileNavOpen.set(this.appStateService.isMobile() ? $event : false);
  }

  // private onResize(): void {

  //   if (!this.appStateService.isMobile()) {
  //     this.isMobileNavOpen.set(false);
  //   }
  //   this.toggleMobileNavExpanded(false);
  // }
}
