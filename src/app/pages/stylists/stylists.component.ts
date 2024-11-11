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
} from 'src/app/shared/stylistItem.model';

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
        nameFirst: 'Joseph',
        nameLast: 'Mendez',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          image: 'joseph-mendez',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '2',
        bio: 'This is a generic biography for Elysia Izquierdo.',
        nameFirst: 'Elysia',
        nameLast: 'Izquierdo',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'elysia-izquierdo',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '3',
        bio: 'This is a generic biography for Krista Snider.',
        nameFirst: 'Krista',
        nameLast: 'Snider',
        bookingMethod: BookingMethodType.PHONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'krista-snider',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '4',
        bio: 'This is a generic biography for Brittany Baldry.',
        nameFirst: 'Brittany',
        nameLast: 'Baldry',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'brittany-baldry',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '5',
        bio: 'This is a generic biography for Annie Armitage.',
        nameFirst: 'Annie',
        nameLast: 'Armitage',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'annie-armitage',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '6',
        bio: 'This is a generic biography for Elizabeth Deuschle.',
        nameFirst: 'Elizabeth',
        nameLast: 'Deuschle',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          image: 'elizabeth-deuschle',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '7',
        bio: 'This is a generic biography for Naomi Matthias.',
        nameFirst: 'Naomi',
        nameLast: 'Matthias',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          image: 'naomi-matthias',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '8',
        bio: 'This is a generic biography for Katie Lehman.',
        nameFirst: 'Katie',
        nameLast: 'Lehman',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'katie-lehman',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '9',
        bio: 'This is a generic biography for Edith Olivas.',
        nameFirst: 'Edith',
        nameLast: 'Olivas',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'edith-olivas',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '10',
        bio: 'This is a generic biography for Raven Valdez.',
        nameFirst: 'Raven',
        nameLast: 'Valdez',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '11',
        bio: 'This is a generic biography for Ed Allison.',
        nameFirst: 'Ed',
        nameLast: 'Allison',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '13',
        bio: 'This is a generic biography for Chandlier Fantauzzi.',
        nameFirst: 'Chandlier',
        nameLast: 'Fantauzzi',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '14',
        bio: 'This is a generic biography for Lena Medina.',
        nameFirst: 'Lena',
        nameLast: 'Medina',
        bookingLink: '',
        bookingMethod: BookingMethodType.NONE,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '15',
        bio: 'This is a generic biography for Dena Sisneros.',
        nameFirst: 'Dena',
        nameLast: 'Sisneros',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.VAGARO,
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        thumbnailInfo: {
          image: 'placeholder',
          type: SiteSections.STYLISTS,
        },
      },
      {
        id: '16',
        bio: 'This is a generic biography for Mallory Jade.',
        nameFirst: 'Mallory',
        nameLast: 'Jade',
        bookingLink: 'https://www.vagaro.com/kristasnider',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        thumbnailInfo: {
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
