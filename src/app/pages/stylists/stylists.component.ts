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

  // Find better way to build this list - duh.
  allStylists = [
    {
      id: '1',
      bio: `Joseph specializes in blonde ambition and hair extensions, whether its bold and glamorous or more subtle.`,
      nameFirst: 'Joseph',
      nameLast: 'Mendez',
      bookingLink: 'https://blendedbyjoseph.square.site/',
      bookingMethod: BookingMethodType.SQUARE_PERSONAL,
      socialMedia: SocialMediaType.INSTAGRAM,
      socialMediaLink: 'https://www.instagram.com/blendedbyjoseph/',
      thumbnailInfo: {
        image: 'joseph-mendez',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '2',
      bio: `Elysia is an Oribe signature stylist and Hanzo cutting specialist known for her precision cuts.`,
      nameFirst: 'Elysia',
      nameLast: 'Izquierdo',
      bookingMethod: BookingMethodType.PHONE,
      bookingPhone: `(720) 224-6629`,
      socialMedia: SocialMediaType.NONE,
      thumbnailInfo: {
        image: 'elysia-izquierdo',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '3',
      bio: `Krista has been the owner of Denver Hair Design for the last 7 years and is dedicated to providing top-tier services while cultivating a vibrant and welcoming salon culture.`,
      nameFirst: 'Krista',
      nameLast: 'Snider',
      bookingMethod: BookingMethodType.NONE,
      bookingPhone: `(720) 297-7593`,
      socialMedia: SocialMediaType.NONE,
      thumbnailInfo: {
        image: 'krista-snider',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '4',
      bio: `With 10 years of experience, Brittany specializes in a wide range of styles from men's cuts to color and blonding.`,
      nameFirst: 'Brittany',
      nameLast: 'Baldry',
      bookingMethod: BookingMethodType.PHONE,
      bookingPhone: `(303) 582-4467`,
      socialMedia: SocialMediaType.INSTAGRAM,
      socialMediaLink: 'https://www.instagram.com/hairbybrittanybaldry/',
      thumbnailInfo: {
        image: 'brittany-baldry',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '5',
      bio: `With years of experience, custom color and dry haircut savvy, Annie always stays up-to-date with new techniques to keep things modern.`,
      nameFirst: 'Annie',
      nameLast: 'Armitage-Mack',
      bookingMethod: BookingMethodType.PHONE,
      bookingPhone: `(720) 220-7012`,
      socialMedia: SocialMediaType.NONE,
      thumbnailInfo: {
        image: 'annie-armitage',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '6',
      bio: `Trained in NYC with west coast roots, Elizabeth has been in the industry for 7 years and brings bold, effortless blonding and dimensional color to Denver.`,
      nameFirst: 'Elizabeth',
      nameLast: 'Deuschle',
      bookingLink: 'https://elizabeth-emery-deuschle.square.site/',
      bookingMethod: BookingMethodType.SQUARE_PERSONAL,
      socialMedia: SocialMediaType.INSTAGRAM,
      socialMediaLink: 'https://www.instagram.com/elizabethdeuschle/',
      thumbnailInfo: {
        image: 'elizabeth-deuschle',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '7',
      bio: `Naomi has been a stylist since 1999. She is a haircutter, hair stylist, hair colorist, wedding hair stylist, and enjoys providing the best service.`,
      nameFirst: 'Naomi',
      nameLast: 'Mathias',
      bookingLink: 'https://www.beautylocksbynaomi.com/',
      bookingMethod: BookingMethodType.SQUARE_PERSONAL,
      socialMedia: SocialMediaType.INSTAGRAM,
      socialMediaLink: 'https://www.instagram.com/mathias_ncm',
      thumbnailInfo: {
        image: 'naomi-mathias',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '8',
      bio: `With 20 years of experience, Katie still brings a fresh, outlook to her craft, combining seasoned expertise with a modern, trend-forward approach.`,
      nameFirst: 'Katie',
      nameLast: 'Lehman',
      bookingMethod: BookingMethodType.PHONE,
      bookingPhone: `(303) 562-6600`,
      socialMedia: SocialMediaType.NONE,
      thumbnailInfo: {
        image: 'katie-lehman',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '9',
      bio: `Edith has been in the industry for 10 years and she’s your new hairstylist.`,
      nameFirst: 'Edith',
      nameLast: 'Olivas',
      bookingMethod: BookingMethodType.PHONE,
      bookingPhone: `(720) 369-7621`,
      socialMedia: SocialMediaType.NONE,
      thumbnailInfo: {
        image: 'edith-olivas',
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '10',
      nameFirst: 'Raven',
      nameLast: 'Valdez',
      bookingLink: 'https://hair-by-rayven-v.square.site/',
      bookingMethod: BookingMethodType.SQUARE_PERSONAL,
      socialMedia: SocialMediaType.INSTAGRAM,
      socialMediaLink: 'https://www.instagram.com/rayvenv/',
      thumbnailInfo: {
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '13',
      nameFirst: 'Chandlier',
      nameLast: 'Fantauzzi',
      bookingLink: 'https://blondr.square.site/',
      bookingMethod: BookingMethodType.SQUARE_PERSONAL,
      socialMedia: SocialMediaType.INSTAGRAM,
      socialMediaLink: 'https://www.instagram.com/blondr_/',
      thumbnailInfo: {
        type: SiteSections.STYLISTS,
      },
    },
    {
      id: '14',
      bio: `Lena, with 14 years of hairstyling magic, brings her love for curly hair, bold color, and the thrill of triathlons into everything she does!`,
      nameFirst: 'Lena',
      nameLast: 'Medina',
      bookingMethod: BookingMethodType.PHONE,
      bookingPhone: `(720) 327-1860`,
      socialMedia: SocialMediaType.NONE,
      thumbnailInfo: {
        type: SiteSections.STYLISTS,
      },
    }
  ] as IStylist[];

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.stylists = this.shuffleStylists(this.allStylists);
    this.assignPlaceholderImages(this.stylists);
  }

  shuffleStylists(stylists: IStylist[]): IStylist[] {
    for (let i = stylists.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [stylists[i], stylists[j]] = [stylists[j], stylists[i]];
    }
    return stylists;
  }

  assignPlaceholderImages(stylists: IStylist[]): void {
    stylists.filter((stylist) => !stylist.thumbnailInfo.image).forEach((stylist, index) => {
      stylist.thumbnailInfo.image = `placeholder-${(index % 7) + 1}`;
    });
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
