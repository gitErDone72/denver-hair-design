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
  @Input() isWebWidthNBeyond: boolean = false;
  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('class.main-nav_collapsed') get collapsed(): boolean {
    return !this.expanded;
  }

  navItems!: DhdNavDataItem[];

  constructor() { }

  ngOnInit(): void {
    this.navItems = DhdNavRoutes.filter(route => route.data.showInNav).map((route) => route.data);
  }

  toggleExpanded(): void {
    if (!this.isWebWidthNBeyond) {
      this.expanded = !this.expanded;
      this.expandedChange.emit(this.expanded);
    }
  }
}
