import { Component, OnInit } from '@angular/core';
import { Product, ProductType } from 'src/app/shared/product.model';
import { SiteSections } from 'src/app/shared/SiteSections.enum';

@Component({
  templateUrl: './products.component.html',
  host: { class: 'page products' }
})
export class ProductsComponent implements OnInit {
  thumbnailType: SiteSections = SiteSections.PRODUCTS;

  allProducts: { brand: string, products: Product[] }[] = [
    {
      brand: 'Saints & Sinners',
      products: [
        {
          id: 1,
          brand: 'Saints & Sinners',
          type: ProductType.SHAMPOO,
          name: 'Saints & Sinners Shampoo 1',
          image: 'product'
        },
        {
          id: 2,
          brand: 'Saints & Sinners',
          type: ProductType.CONDITIONER,
          name: 'Saints & Sinners Conditioner 1',
          image: 'product'
        },
        {
          id: 3,
          brand: 'Saints & Sinners',
          type: ProductType.CONDITIONER,
          name: 'Saints & Sinners Conditioner 2',
          image: 'product'
        },
        {
          id: 4,
          brand: 'Saints & Sinners',
          type: ProductType.SHAMPOO,
          name: 'Saints & Sinners Shampoo 2',
          image: 'product'
        },
        {
          id: 5,
          brand: 'Saints & Sinners',
          type: ProductType.STYLING_PRODUCT,
          name: 'Saints & Sinners Styling Product 1',
          image: 'product'
        },
        {
          id: 6,
          brand: 'Saints & Sinners',
          type: ProductType.SHAMPOO,
          name: 'Saints & Sinners Shampoo 3',
          image: 'product'
        }
      ]
    },
    {
      brand: 'Redken',
      products: [
        {
          id: 7,
          brand: 'Redken',
          type: ProductType.SHAMPOO,
          name: `Redken Shampoo`,
          image: 'product'
        },
        {
          id: 8,
          brand: 'Redken',
          type: ProductType.CONDITIONER,
          name: `Redken Conditioner`,
          image: 'product'
        }
      ]
    },
    {
      brand: 'Colura',
      products: [
        {
          id: 9,
          brand: 'Colura',
          type: ProductType.STYLIST_SUPPLY,
          name: `Coloura Color`,
          image: 'product'
        },
        {
          id: 10,
          brand: 'Colura',
          type: ProductType.STYLIST_SUPPLY,
          name: `Colura Color 2`,
          image: 'product'
        }
      ]
    },
    {
      brand: 'IGK',
      products: [
        {
          id: 11,
          brand: 'IGK',
          type: ProductType.SHAMPOO,
          name: `IGK Shampoo`,
          image: 'product'
        },
        {
          id: 12,
          brand: 'IGK',
          type: ProductType.SHAMPOO,
          name: `IGK Shampoo 2`,
          image: 'product'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
