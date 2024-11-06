import { SiteSections } from "src/app/shared/site-sections.enum";

export interface IThumbnailItem  {
  hasDetails?: boolean;
  image?: string;
  type: SiteSections;
}
