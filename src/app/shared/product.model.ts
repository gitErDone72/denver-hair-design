export enum ProductType {
  SHAMPOO = 'Shampoo',
  CONDITIONER = 'Conditioner',
  STYLING_PRODUCT = 'Styling Products',
  STYLIST_SUPPLY = 'STYLIST_SUPPLY',
}
export interface IProduct {
  id: number,
  brand: string;
  type: ProductType,
  name: string,
  image: string
}

export interface IProductBrand {
  brandName: string,
  products: IProduct[]
}
// allProducts: { brand: string, products: Product[]
