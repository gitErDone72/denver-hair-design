import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './gallery.component.html',
  host: { class: 'page gallery' }
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
