import { Stylist } from "src/app/shared/stylist.model";

export interface IModalOptions {
  data?: any;
  animations?: {
    modal?: {
      enter?: string;
      leave?: string;
    };
    overlay?: {
      enter?: string;
      leave?: string;
    };
  };
  size?: {
    minWidth?: string;
    width?: string;
    maxWidth?: string;
    minHeight?: string;
    height?: string;
    maxHeight?: string;
  };
}

export interface IModalStylistOptions extends IModalOptions {
  stylist: Stylist;
}
