import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './chair-rental.component.html',
  host: { class: 'page chair-rental' },
  imports: [NgOptimizedImage],
})
export class ChairRentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
