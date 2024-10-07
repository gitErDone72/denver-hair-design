import { IThumbnailItem } from "../components/thumbnail/thumbnail.model";

export enum SocialMediaType {
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  NONE = 'NONE',
  TWITTER = 'TWITTER',
  YOUTUBE = 'YOUTUBE',
}
export enum BookingMethodType {
  NONE = 'NONE',
  PHONE = 'PHONE',
  SQUARE_DHD = 'SQUARE_DHD',
  SQUARE_PERSONAL = 'SQUARE_PERSONAL',
  VAGARO = 'VAGARO',
}
export interface IStylist {
  id: string;
  bookingLink: string;
  bookingMethod: BookingMethodType;
  firstName: string;
  lastName: string;
  phone: string;
  socialMedia: SocialMediaType;
  socialMediaLink: string;
  thumbnailInfo: IThumbnailItem;
}
