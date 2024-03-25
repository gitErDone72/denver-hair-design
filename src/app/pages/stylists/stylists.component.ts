import { Component, OnInit } from '@angular/core';
import { APIService, ListStylistsQuery, Stylist } from 'src/app/API.service';
import { SiteSections } from 'src/app/shared/site-sections.enum';
import { BookingMethodTypes, SocialMediaTypes } from 'src/app/shared/stylist.model';

@Component({
  templateUrl: './stylists.component.html',
  host: { class: 'page page_type_thumbs-only stylists' }
})
export class StylistsComponent implements OnInit {
  stylists: Stylist[] = [];

  thumbnailType: SiteSections = SiteSections.STYLISTS;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    // this.api.ListStylists().then((data: ListStylistsQuery) => {
    //   this.stylists = data.items as Stylist[];
    // })
    this.stylists = [
      {
        id: '1',
        firstName: 'Brittany',
        lastName: 'Baldry',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodTypes.NONE,
        bookingLink: '',
      },
      {
        id: '2',
        firstName: 'Katie',
        lastName: 'Lehman',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodTypes.NONE,
        bookingLink: '',
      },
      {
        id: '3',
        firstName: 'Raven',
        lastName: 'Valdez',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodTypes.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '4',
        firstName: 'Ed',
        lastName: 'Allison',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodTypes.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '5',
        firstName: 'Joseph',
        lastName: 'Mendez',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodTypes.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '6',
        firstName: 'Katelynn',
        lastName: 'Fisher',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodTypes.NONE,
        bookingLink: '',
      },
      {
        id: '7',
        firstName: 'Edith',
        lastName: 'Olivas',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodTypes.NONE,
        bookingLink: '',
      },
      {
        id: '8',
        firstName: 'Annie',
        lastName: 'Armitage',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodTypes.NONE,
        bookingLink: '',
      },
      {
        id: '9',
        firstName: 'Naomi',
        lastName: 'Matthias',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodTypes.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '10',
        firstName: 'Chandlier',
        lastName: 'Fantauzzi',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodTypes.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '11',
        firstName: 'Elizabeth',
        lastName: 'Deuschle',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodTypes.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '12',
        firstName: 'Lena',
        lastName: 'Medina',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodTypes.NONE,
        bookingLink: '',
      },
      {
        id: '13',
        firstName: 'Dena',
        lastName: 'Sisneros',
        headShot: 'stylist',
        socialMedia: SocialMediaTypes.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodTypes.VAGARO,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
    ] as Stylist[];
  }
}
