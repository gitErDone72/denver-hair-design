export enum SocialMediaType {
  NONE = 'NONE',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  TWITTER = 'TWITTER',
  YOUTUBE = 'YOUTUBE',
}
export enum BookingMethodType {
  NONE = 'NONE',
  VAGARO = 'VAGARO',
  SQUARE_DHD = 'SQUARE_DHD',
  SQUARE_PERSONAL = 'SQUARE_PERSONAL',
  PHONE = 'PHONE',
}
export interface Stylist {
  id: string;
  firstName: string;
  lastName: string;
  headShot: string;
  phone: string;
  socialMedia: SocialMediaType;
  socialMediaLink: string;
  bookingMethod: BookingMethodType;
  bookingLink: string;
}
