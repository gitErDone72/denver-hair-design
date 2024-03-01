import { Component, OnInit } from '@angular/core';
import { APIService, ListStylistsQuery, Stylist } from 'src/app/API.service';
import { SiteSections } from 'src/app/shared/site-sections.enum';

@Component({
  templateUrl: './stylists.component.html',
  host: { class: 'page page_type_thumbs-only stylists' }
})
export class StylistsComponent implements OnInit {
  stylists: Stylist[] = [];

  thumbnailType: SiteSections = SiteSections.STYLISTS;

  constructor(private api: APIService) { }

  async ngOnInit(): Promise<void> {
    await this.api.ListStylists().then((data: ListStylistsQuery) => {
      this.stylists = data.items as Stylist[];
    })
  }
}
