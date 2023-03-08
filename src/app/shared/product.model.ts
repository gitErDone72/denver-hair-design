export enum ProductType {
  SHAMPOO = 'Shampoo',
  CONDITIONER = 'Conditioner',
  STYLING_PRODUCT = 'Styling Products',
  STYLIST_SUPPLY = 'STYLIST_SUPPLY',
}
export interface Product {
  id: number,
  brand: string;
  type: ProductType,
  name: string,
  image: string
}
