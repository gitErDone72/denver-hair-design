import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'dhd-page-overlay',
  templateUrl: './page-overlay.component.html',
  host: { class: 'overlay' }
})
export class PageOverlayComponent implements OnInit {
  @Input() pageOverlayDarkened: boolean = false;
  @Input() pageName: string = '/';
  @HostBinding('class.overlay_show') get overlayDarkened(): boolean {
    return this.pageOverlayDarkened;
  }

  constructor() { }

  ngOnInit() {
  }

}
