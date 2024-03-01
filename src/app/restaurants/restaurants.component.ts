import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Restaurant } from '../API.service';

/** Subscription type will be inferred from this library */
import { ZenObservable } from 'zen-observable-ts';
import { Subscription } from 'rxjs';
// ...


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  createForm: FormGroup;

  /* declare restaurants variable */
  restaurants: Array<Restaurant> = [];
  /** Declare subscription variable */
  private subscription: ZenObservable.Subscription | null = null;
  // ...

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

ngOnInit() {
    this.api.ListRestaurants().then(event => {
      this.restaurants = event.items as Restaurant[];
    });

    /* subscribe to new restaurants being created */
    this.subscription = this.api.OnCreateRestaurantListener().subscribe(
      (event: any) => {
        const newRestaurant = event.value.data.onCreateRestaurant;
        this.restaurants = [newRestaurant, ...this.restaurants];
      }
    ) as Subscription;
  }

  onCreate(restaurant: Restaurant) {
    this.api
      .CreateRestaurant(restaurant)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating restaurant...', e);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}


