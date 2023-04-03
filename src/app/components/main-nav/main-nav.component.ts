import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DhdNavItem } from './nav-item.model';

@Component({
  selector: 'dhd-main-nav',
  templateUrl: './main-nav.component.html',
  host: { class: 'main-nav' }
})
export class MainNavComponent implements OnInit {

  @Input() expanded: boolean = true;

  @HostBinding('class.main-nav_collapsed') get collapsed(): boolean {
    return !this.expanded;
  }

  navItems: DhdNavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navItems = [
      {
        name: 'Services',
        routerLink: '/services'
      },
      {
        name: 'Stylists',
        routerLink: '/stylists'
      },
      {
        name: 'Products',
        routerLink: '/products'
      },
      {
        name: 'Gallery',
        routerLink: '/gallery'
      },
      {
        name: 'Chair Rental',
        routerLink: '/chair-rental'
      },
    ]

  }

  toggleExpanded(): void {
    this.expanded = !this.expanded
  }

}
