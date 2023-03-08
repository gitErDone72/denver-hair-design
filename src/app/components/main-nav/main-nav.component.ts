import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dhd-main-nav',
  templateUrl: './main-nav.component.html',
  host: { class: 'main-nav' }
})
export class MainNavComponent implements OnInit {

  @Input()expanded: boolean = true;

  @HostBinding('class.main-nav_collapsed') get collapsed(): boolean {
    return !this.expanded;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded
  }

}
