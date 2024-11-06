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
  // ENUMS for the template
  bookingMethodType = BookingMethodType;
  socialMediaType = SocialMediaType;

  stylists: IStylist[] = [];
  thumbnailType: SiteSections = SiteSections.STYLISTS;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.stylists = [
      {
        id: '1',
        bio: 'This is a generic biography for Joseph Mendez.',
        firstName: 'Joseph',
        lastName: 'Mendez',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'joseph-mendez',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '2',
        bio: 'This is a generic biography for Elysia Izquierdo.',
        firstName: 'Elysia',
        lastName: 'Izquierdo',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'elysia-izquierdo',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '3',
        bio: 'This is a generic biography for Krista Snider.',
        firstName: 'Krista',
        lastName: 'Snider',
        bookingMethod: BookingMethodType.PHONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'krista-snider',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '4',
        bio: 'This is a generic biography for Brittany Baldry.',
        firstName: 'Brittany',
        lastName: 'Baldry',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'brittany-baldry',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '5',
        bio: 'This is a generic biography for Annie Armitage.',
        firstName: 'Annie',
        lastName: 'Armitage',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'annie-armitage',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '6',
        bio: 'This is a generic biography for Elizabeth Deuschle.',
        firstName: 'Elizabeth',
        lastName: 'Deuschle',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'elizabeth-deuschle',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '7',
        bio: 'This is a generic biography for Naomi Matthias.',
        firstName: 'Naomi',
        lastName: 'Matthias',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'naomi-matthias',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '8',
        bio: 'This is a generic biography for Katie Lehman.',
        firstName: 'Katie',
        lastName: 'Lehman',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'katie-lehman',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '9',
        bio: 'This is a generic biography for Edith Olivas.',
        firstName: 'Edith',
        lastName: 'Olivas',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'edith-olivas',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '10',
        bio: 'This is a generic biography for Raven Valdez.',
        firstName: 'Raven',
        lastName: 'Valdez',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '11',
        bio: 'This is a generic biography for Ed Allison.',
        firstName: 'Ed',
        lastName: 'Allison',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '13',
        bio: 'This is a generic biography for Chandlier Fantauzzi.',
        firstName: 'Chandlier',
        lastName: 'Fantauzzi',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '14',
        bio: 'This is a generic biography for Lena Medina.',
        firstName: 'Lena',
        lastName: 'Medina',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '15',
        bio: 'This is a generic biography for Dena Sisneros.',
        firstName: 'Dena',
        lastName: 'Sisneros',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.VAGARO,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '16',
        bio: 'This is a generic biography for Mallory Jade.',
        firstName: 'Mallory',
        lastName: 'Jade',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          hasDetails: true,
          image: 'placeholder',
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
