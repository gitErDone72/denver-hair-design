import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'mobile-nav-blur',
  templateUrl: './mobile-nav-blur.component.html',
  host: { class: 'mobile-nav-blur' }
})
export class MobileNavBlur implements OnInit {
  @Input() isMoblieNavOpen: boolean = false;
  @Input() pageName: string = '/';
  @HostBinding('class.mobile-nav-blur_show') get showMobileNavBlur(): boolean {
    return this.isMoblieNavOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
