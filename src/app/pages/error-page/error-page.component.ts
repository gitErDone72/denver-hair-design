import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Data, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  // providers: [RouterModule],
  selector: 'dhd-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string = '';

  // constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // // this.errorMessage = this.route.snapshot.data['message'];
    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.errorMessage = data['message'];
    //   }
    // );
  }
}
