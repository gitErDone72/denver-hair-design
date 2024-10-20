export enum ProductType {
  SHAMPOO = 'Shampoo',
  CONDITIONER = 'Conditioner',
  STYLING_PRODUCT = 'Styling Products',
  STYLIST_SUPPLY = 'STYLIST_SUPPLY',
}
export interface IProduct {
  id: number,
  type: ProductType,
  name: string,
  image: string
}

export interface IProductBrand {
  brandName: string,
  products: IProduct[],
  showInListing?: boolean
}
// allProducts: { brand: string, products: Product[]
