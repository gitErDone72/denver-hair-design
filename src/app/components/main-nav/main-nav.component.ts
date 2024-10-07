import { Component, computed, HostBinding, input, OnInit, output, signal } from '@angular/core';
import { DhdNavDataItem } from './nav-item.model';
import { DhdNavRoutes } from '../../shared/routing.config';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'dhd-main-nav',
  templateUrl: './main-nav.component.html',
  host: { class: 'main-nav' },
  imports: [RouterModule]
})
export class MainNavComponent implements OnInit {
  @HostBinding('class.main-nav_collapsed') get _collapsed(): boolean {
    return this.addCollapsedClass();
  }

  isHomePage = input.required<boolean>();
  isBeyondMobileWidth = input.required<boolean>();

  onMobileNavExpanded = output<boolean>();

  toggleExpanded = signal<boolean>(false);

  addCollapsedClass = computed((): boolean => {
    if (this.isBeyondMobileWidth()) {
      return true;
    }
    return !this.isHomePage() && !this.toggleExpanded();
  });

  navItems!: DhdNavDataItem[];

  constructor() { }

  ngOnInit(): void {
    this.onMobileNavExpanded.emit(this.toggleExpanded());
    this.navItems = DhdNavRoutes.filter(route => route.data.showInNav).map((route) => route.data);
  }

  navItemClick(): void {
    if (!this.isBeyondMobileWidth()) {
      this.toggleExpanded.update((expandedState) => {
        if (this.isHomePage()) {
          return false
        } else {
          return !expandedState
        }
      });
      this.onMobileNavExpanded.emit(this.toggleExpanded());
    }
  }
}
