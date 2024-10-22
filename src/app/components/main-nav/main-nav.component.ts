import { Component, input, OnInit, output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhdNavRoutes } from '../../shared/routing.config';
import { IDhdNavDataItem } from './nav-item.model';

@Component({
  standalone: true,
  selector: 'dhd-main-nav',
  templateUrl: './main-nav.component.html',
  host: { class: 'main-nav' },
  imports: [RouterModule],
})
export class MainNavComponent implements OnInit {
  isHomePage = input.required<boolean>();
  isMobileMode = input.required<boolean>();
  onMobileNavExpanded = output<boolean>();

  isExpanded: boolean = false;
  navItems!: IDhdNavDataItem[];

  constructor() {}

  ngOnInit(): void {
    this.onMobileNavExpanded.emit(this.isExpanded);
    this.navItems = DhdNavRoutes.filter((route) => route.data.showInNav).map(
      (route) => route.data
    );
  }

  navItemClick(): void {
    if (this.isMobileMode()) {
      this.isExpanded = this.isHomePage() ? false : !this.isExpanded;
    } else {
      this.isExpanded = false;
    }
    this.onMobileNavExpanded.emit(this.isExpanded);
  }
}
