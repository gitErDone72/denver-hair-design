import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './home.component.html',
  host: { class: 'page home' }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
