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
  host: { class: 'page stylists' },
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
        firstName: 'Joseph',
        lastName: 'Mendez',
        headShot: 'joseph-mendez',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '2',
        firstName: 'Elysia',
        lastName: 'Izquierdo',
        headShot: 'elysia-izquierdo',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '3',
        firstName: 'Krista',
        lastName: 'Snider',
        headShot: 'krista-snider',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
      },
      {
        id: '4',
        firstName: 'Brittany',
        lastName: 'Baldry',
        headShot: 'brittany-baldry',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '5',
        firstName: 'Annie',
        lastName: 'Armitage',
        headShot: 'annie-armitage',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '6',
        firstName: 'Elizabeth',
        lastName: 'Deuschle',
        headShot: 'elizabeth-deuschle',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '7',
        firstName: 'Naomi',
        lastName: 'Matthias',
        headShot: 'naomi-matthias',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '8',
        firstName: 'Katie',
        lastName: 'Lehman',
        headShot: 'katie-lehman',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '9',
        firstName: 'Edith',
        lastName: 'Olivas',
        headShot: 'edith-olivas',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '10',
        firstName: 'Raven',
        lastName: 'Valdez',
        // headShot: 'raven-valdez',
        headShot: 'placeholder',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '11',
        firstName: 'Ed',
        lastName: 'Allison',
        // headShot: 'ed-allison',
        headShot: 'placeholder',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '12',
        firstName: 'Katelynn',
        lastName: 'Fisher',
        // headShot: 'katelynn-fisher',
        headShot: 'placeholder',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '13',
        firstName: 'Chandlier',
        lastName: 'Fantauzzi',
        // headShot: 'chandlier-fantauzzi',
        headShot: 'placeholder',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '14',
        firstName: 'Lena',
        lastName: 'Medina',
        // headShot: 'lena-medina',
        headShot: 'placeholder',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.NONE,
        bookingLink: '',
      },
      {
        id: '15',
        firstName: 'Dena',
        lastName: 'Sisneros',
        // headShot: 'dena-sisneros',
        headShot: 'placeholder',
        socialMedia: SocialMediaType.NONE,
        socialMediaLink: '',
        bookingMethod: BookingMethodType.VAGARO,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
      {
        id: '16',
        firstName: 'Mallory',
        lastName: 'Jade',
        // headShot: 'mallory-jade',
        headShot: 'placeholder',
        socialMedia: SocialMediaType.INSTAGRAM,
        socialMediaLink: 'https://www.instagram.com/krista_snider/',
        bookingMethod: BookingMethodType.SQUARE_PERSONAL,
        bookingLink: 'https://www.vagaro.com/kristasnider',
      },
    ] as Stylist[];
  }

  openStylistModal(stylist: Stylist): void {
    this.modalService.open(ModalStylistComponent, {
      data: stylist,
      size: {
        maxWidth: '480px',
        height:
          window.innerWidth > 600
            ? 'auto'
            : 'calc(100vh - var(--spacing-main) * 4)',
        width:
          window.innerWidth > 600
            ? 'auto'
            : 'calc(100vw - var(--spacing-main) * 4)',
      },
    } as IModalOptions);
  }
}

// animations: {
//   modal: {
//     enter: 'enter-scaling 0.3s ease-out',
//     leave: 'fade-out 0.3s forwards',
//   },
//   overlay: {
//     enter: 'fade-in 1s',
//     leave: 'fade-out 0.3s forwards',
//   },
// },
// size: {
//   width: '40rem',
// },
