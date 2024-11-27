import { Component, OnInit, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DhdNavRoutes } from '../../shared/routing.config';
import { IDhdNavDataItem } from './nav-item.model';
import { AppStateService } from 'src/app/services/app.state.service';

@Component({
  standalone: true,
  selector: 'dhd-main-nav',
  templateUrl: './main-nav.component.html',
  host: { class: 'main-nav' },
  imports: [RouterModule],
})
export class MainNavComponent implements OnInit {
  onMobileNavExpanded = output<boolean>();

  isExpanded: boolean = false;
  navItems!: IDhdNavDataItem[];

  constructor(private appStateService: AppStateService) {}

  ngOnInit(): void {
    this.onMobileNavExpanded.emit(this.isExpanded);
    this.navItems = DhdNavRoutes.filter((route) => route.data.showInNav).map(
      (route) => route.data
    );
  }

  navItemClick(): void {
    if (this.appStateService.isMobile()) {
      this.isExpanded = this.appStateService.isHomePage() ? false : !this.isExpanded;
    } else {
      this.isExpanded = false;
    }
    this.onMobileNavExpanded.emit(this.isExpanded);
  }
}
