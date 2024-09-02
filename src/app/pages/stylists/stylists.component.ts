import { Component, OnInit } from '@angular/core';
import { IModalOptions } from 'src/app/components/modal/modal-options.model';
import { ModalStylistComponent } from 'src/app/components/modal/modal-stylist/modal-stylist.component';
import { ThumbnailComponent } from 'src/app/components/thumbnail/thumbnail.component';
import { ModalService } from 'src/app/services/modal.service';
import { SiteSections } from 'src/app/shared/site-sections.enum';
import {
  BookingMethodType,
  SocialMediaType,
  Stylist,
} from 'src/app/shared/stylist.model';

@Component({
  standalone: true,
  templateUrl: './stylists.component.html',
  host: { class: 'page page_type_thumbs-only stylists' },
  imports: [ThumbnailComponent],
})
export class StylistsComponent implements OnInit {
  stylists: Stylist[] = [];
  thumbnailType: SiteSections = SiteSections.STYLISTS;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
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

  openStylistModal(stylistId: string) {
    this.modalService.open(ModalStylistComponent, {
      data: stylistId,
    } as IModalOptions);
  }
}
