import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './products.component.html',
  host: { class: 'page products' },
  imports: []
})
export class ProductsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
