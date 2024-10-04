import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
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
  @Input() expanded: boolean = true;
  @Input() isBeyondMobileWidth: boolean = false;
  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('class.main-nav_collapsed') get collapsed(): boolean {
    return !this.expanded;
  }

  navItems!: DhdNavDataItem[];

  constructor() { }

  ngOnInit(): void {
    this.navItems = DhdNavRoutes.filter(route => route.data.showInNav).map((route) => route.data);
  }

  /**
   * Toggles the expanded state of the navigation component.
   * If the component is not beyond the mobile width, it will
   * invert the current expanded state and emit the new state.
   *
   * @remarks
   * This method does not perform any action if the component
   * is beyond the mobile width.
   *
   * @emits {boolean} expandedChange - Emits the new expanded state.
   */
  toggleExpanded(): void {
    if (!this.isBeyondMobileWidth) {
      this.expanded = !this.expanded;
      this.expandedChange.emit(this.expanded);
    }
  }
}
