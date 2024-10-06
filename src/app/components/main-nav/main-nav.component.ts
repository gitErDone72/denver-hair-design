import { Component, computed, effect, HostBinding, input, OnInit, output, signal } from '@angular/core';
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

  isHomePage = input.required<boolean>();
  isBeyondMobileWidth = input<boolean>(false);
  expandedChange = output<boolean>();

  expanded = signal<boolean>(true);

  @HostBinding('class.main-nav_collapsed') get collapsed(): boolean {
    return !this.expanded();
  }

  navItems!: DhdNavDataItem[];

  constructor() {
    effect(() => {
      if (this.isHomePage()) {
        this.expanded.set(true);
        this.expandedChange.emit(false);
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit(): void {
    this.navItems = DhdNavRoutes.filter(route => route.data.showInNav).map((route) => route.data);
  }

  toggleExpanded() {
    if (!this.isBeyondMobileWidth()) {
      this.expanded.update(value => !value);
      this.expandedChange.emit(this.expanded());
    }
  }
}
