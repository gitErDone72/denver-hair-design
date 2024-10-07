// From https://medium.com/@greenFlag/how-to-easily-and-quickly-create-a-modal-in-angular-a2f82d5c11f6

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
