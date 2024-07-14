import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'dhd-page-overlay',
  templateUrl: './page-overlay.component.html',
  host: { class: 'overlay' }
})
export class PageOverlayComponent implements OnInit {
  @Input() pageBlurredForMobileNavigation: boolean = false;
  @Input() pageName: string = '/';
  @HostBinding('class.overlay_show') get showMobileNavOverlay(): boolean {
    return this.pageBlurredForMobileNavigation;
  }

  constructor() { }

  ngOnInit() {
  }

}
