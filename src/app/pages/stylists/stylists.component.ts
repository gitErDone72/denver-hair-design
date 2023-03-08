import { Component, OnInit } from '@angular/core';
import { SiteSections } from 'src/app/shared/SiteSections.enum';

@Component({
  templateUrl: './stylists.component.html',
  host: { class: 'page page_type_thumbs-only stylists' }
})
export class StylistsComponent implements OnInit {

  thumbnailType: SiteSections = SiteSections.STYLISTS;

  constructor() { }

  ngOnInit(): void {
  }

}
