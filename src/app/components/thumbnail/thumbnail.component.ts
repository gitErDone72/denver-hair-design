import { Component, Input, OnInit } from '@angular/core';
import { SiteSections as SiteSection } from 'src/app/shared/site-sections.enum';

@Component({
  selector: 'dhd-thumbnail',
  templateUrl: './thumbnail.component.html',
  host: { class: 'thumbnail' }
})
export class ThumbnailComponent implements OnInit {

  @Input() type: SiteSection = SiteSection.STYLISTS;
  @Input() image: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.image = `../../assets/img/${this.type.toLowerCase()}/${this.image}.jpg`
  }
}
