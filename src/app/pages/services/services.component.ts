import { Component, OnInit } from '@angular/core';
import { SalonService, SalonServiceType } from 'src/app/shared/salon-service.model';

@Component({
  templateUrl: './services.component.html',
  host: { class: 'page services' }
})
export class ServicesComponent implements OnInit {
  allServices: { type: SalonServiceType, salonServices: SalonService[] }[] = [
    {
      type: SalonServiceType.HAIR,
      salonServices: [
        {
          id: 1,
          type: SalonServiceType.HAIR,
          name: 'Color',
          description: `Get this season's hottest look`,
          startingPrice: 100
        },
        {
          id: 2,
          type: SalonServiceType.HAIR,
          name: 'Haircuts',
          description: `Get this season's hottest look`,
          startingPrice: 100
        },
        {
          id: 3,
          type: SalonServiceType.HAIR,
          name: 'Blowouts',
          description: `Get this season's hottest look`,
          startingPrice: 100
        },
        {
          id: 4,
          type: SalonServiceType.HAIR,
          name: 'Root touch up',
          description: `Get this season's hottest look`,
          startingPrice: 100
        },
        {
          id: 5,
          type: SalonServiceType.HAIR,
          name: 'Balayage',
          description: `Get this season's hottest look`,
          startingPrice: 100
        },
        {
          id: 6,
          type: SalonServiceType.HAIR,
          name: 'Highlights',
          description: `Get this season's hottest look`,
          startingPrice: 100
        }
      ]
    },
    {
      type: SalonServiceType.WAXING,
      salonServices: [
        {
          id: 7,
          type: SalonServiceType.WAXING,
          name: `Eyebrow waxing`,
          description: `Get this season's hottest look`,
          startingPrice: 100
        },
        {
          id: 8,
          type: SalonServiceType.WAXING,
          name: `facial waxing`,
          description: `get this season's hottest look`,
          startingPrice: 100
        }
      ]
    },
    {
      type: SalonServiceType.FACE,
      salonServices: [
        {
          id: 9,
          type: SalonServiceType.FACE,
          name: `brow & eyelash tinting`,
          description: `get this season's hottest look`,
          startingPrice: 100
        },
        {
          id: 10,
          type: SalonServiceType.FACE,
          name: `makeup`,
          description: `get this season's hottest look`,
          startingPrice: 100
        }
      ]
    },
    {
      type: SalonServiceType.NAIL_TREATMENTS,
      salonServices: [
        {
          id: 11,
          type: SalonServiceType.NAIL_TREATMENTS,
          name: `pedicures`,
          description: `get this season's hottest look`,
          startingPrice: 100
        },
        {
          id: 12,
          type: SalonServiceType.NAIL_TREATMENTS,
          name: `manicures`,
          description: `get this season's hottest look`,
          startingPrice: 100
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // assign this.allServices from call to actual service
  }

}