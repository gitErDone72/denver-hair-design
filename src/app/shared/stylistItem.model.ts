import { IThumbnailItem } from "../components/thumbnail/thumbnail.model";

export enum SocialMediaType {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  NONE = 'none',
  TWITTER = 'twitter',
  YOUTUBE = 'youtube',
}
export enum BookingMethodType {
  NONE = 'none',
  PHONE = 'phone',
  SQUARE_DHD = 'squareDhd',
  SQUARE_PERSONAL = 'squarePersonal',
  VAGARO = 'vagaro',
}
export interface IStylist {
  id: string;
  bio: string;
  bookingLink?: string;
  bookingMethod: BookingMethodType;
  bookingPhone?: string;
  nameFirst: string;
  nameLast: string;
  socialMedia: SocialMediaType;
  socialMediaLink?: string;
  thumbnailInfo: IThumbnailItem;
}
