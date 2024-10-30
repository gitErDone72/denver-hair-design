import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IModalOptions } from 'src/app/components/modal/modal-options.model';
import { ModalStylistComponent } from 'src/app/components/modal/modal-stylist/modal-stylist.component';
import { ThumbnailComponent } from 'src/app/components/thumbnail/thumbnail.component';
import { ModalService } from 'src/app/services/modal.service';
import { SiteSections } from 'src/app/shared/site-sections.enum';
import {
  BookingMethodType,
  IStylist,
  SocialMediaType,
} from 'src/app/shared/stylist.model';

@Component({
  standalone: true,
  templateUrl: './stylists.component.html',
  host: { class: 'page stylists' },
  imports: [ThumbnailComponent, CommonModule],
})
export class StylistsComponent implements OnInit {
  stylists: IStylist[] = [];
  thumbnailType: SiteSections = SiteSections.STYLISTS;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.stylists = [
      {
        id: '1',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        firstName: 'Joseph',
        lastName: 'Mendez',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'joseph-mendez',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '2',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        firstName: 'Elysia',
        lastName: 'Izquierdo',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'elysia-izquierdo',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '3',
        bookingMethod: BookingMethodType.NONE,
        firstName: 'Krista',
        lastName: 'Snider',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'krista-snider',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '4',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        firstName: 'Brittany',
        lastName: 'Baldry',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'brittany-baldry',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '5',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        firstName: 'Annie',
        lastName: 'Armitage',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'annie-armitage',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '6',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        firstName: 'Elizabeth',
        lastName: 'Deuschle',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'elizabeth-deuschle',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '7',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        firstName: 'Naomi',
        lastName: 'Matthias',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'naomi-matthias',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '8',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        firstName: 'Katie',
        lastName: 'Lehman',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'katie-lehman',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '9',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        firstName: 'Edith',
        lastName: 'Olivas',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'edith-olivas',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '10',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        firstName: 'Raven',
        lastName: 'Valdez',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '11',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        firstName: 'Ed',
        lastName: 'Allison',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '13',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        firstName: 'Chandlier',
        lastName: 'Fantauzzi',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '14',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        firstName: 'Lena',
        lastName: 'Medina',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '15',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.VAGARO,
        firstName: 'Dena',
        lastName: 'Sisneros',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '16',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        firstName: 'Mallory',
        lastName: 'Jade',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          isImageClickable: true,
          type: SiteSections.STYLISTS,
        },
      },
    ] as IStylist[];
  }

  openStylistModal(stylist: IStylist): void {
    this.modalService.open(ModalStylistComponent, {
      data: stylist,
      size: {
        maxWidth: '480px',
      },
    } as IModalOptions);
  }
}
