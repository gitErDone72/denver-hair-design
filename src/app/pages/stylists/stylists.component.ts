import { Component, OnInit } from '@angular/core';
import { APIService, ListStylistsQuery, Stylist } from 'src/app/API.service';
import { SiteSections } from 'src/app/shared/site-sections.enum';
import { BookingMethodType, SocialMediaType } from 'src/app/shared/stylist.model';

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

    this.api.CreateStylist({
      firstName: 'Brittany',
      lastName: 'Baldry',
      headShot: 'stylist',
      socialMedia: SocialMediaType.NONE,
      socialMediaLink: '',
      bookingMethod: BookingMethodType.NONE,
      bookingLink: '',
    }).then((data) => {
      console.log('stylist created: ', data);
      this.api.ListStylists().then((data: ListStylistsQuery) => {
        console.log('stylists: ', data);
      })
    });


    this.stylists = [
      {
        id: '1',
        firstName: 'Brittany',
        lastName: 'Baldry',
        headShot: 'stylist',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '2',
        firstName: 'Katie',
        lastName: 'Lehman',
        headShot: 'stylist',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '3',
        firstName: 'Raven',
        lastName: 'Valdez',
        headShot: 'stylist',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '4',
        firstName: 'Ed',
        lastName: 'Allison',
        headShot: 'stylist',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '5',
        firstName: 'Joseph',
        lastName: 'Mendez',
        headShot: 'stylist',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '6',
        firstName: 'Katelynn',
        lastName: 'Fisher',
        headShot: 'stylist',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '7',
        firstName: 'Edith',
        lastName: 'Olivas',
        headShot: 'stylist',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '8',
        firstName: 'Annie',
        lastName: 'Armitage',
        headShot: 'stylist',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '9',
        firstName: 'Naomi',
        lastName: 'Matthias',
        headShot: 'stylist',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '10',
        firstName: 'Chandlier',
        lastName: 'Fantauzzi',
        headShot: 'stylist',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '11',
        firstName: 'Elizabeth',
        lastName: 'Deuschle',
        headShot: 'stylist',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '12',
        firstName: 'Lena',
        lastName: 'Medina',
        headShot: 'stylist',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '13',
        firstName: 'Dena',
        lastName: 'Sisneros',
        headShot: 'stylist',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.VAGARO,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
    ] as Stylist[];
  }
}
