import { Component, OnInit } from '@angular/core';
import { ThumbnailComponent } from 'src/app/components/thumbnail/thumbnail.component';
import { IProductBrand, ProductType } from 'src/app/shared/product.model';
import { SiteSections } from 'src/app/shared/site-sections.enum';

@Component({
  standalone: true,
  templateUrl: './products.component.html',
  host: { class: 'page products' },
  imports: [ThumbnailComponent]
})
export class ProductsComponent implements OnInit {
  thumbnailType: SiteSections = SiteSections.PRODUCTS;

  productBrands: IProductBrand[] = [
    {
      brandName: 'Oribe',
      products: [
        {
          id: 1,
          brand: 'Oribe',
          type: ProductType.SHAMPOO,
          name: 'Oribe Shampoo 1',
          image: 'product'
        },
        {
          id: 2,
          brand: 'Oribe',
          type: ProductType.CONDITIONER,
          name: 'Oribe Conditioner 1',
          image: 'product'
        },
        {
          id: 3,
          brand: 'Oribe',
          type: ProductType.CONDITIONER,
          name: 'Oribe Conditioner 2',
          image: 'product'
        },
        {
          id: 4,
          brand: 'Oribe',
          type: ProductType.SHAMPOO,
          name: 'Oribe Shampoo 2',
          image: 'product'
        },
        {
          id: 5,
          brand: 'Oribe',
          type: ProductType.STYLING_PRODUCT,
          name: 'Oribe Styling Product 1',
          image: 'product'
        },
        {
          id: 6,
          brand: 'Oribe',
          type: ProductType.SHAMPOO,
          name: 'Oribe Shampoo 3',
          image: 'product'
        }
      ]
    },
    {
      brandName: 'Kevin Murphy',
      products: [
        {
          id: 7,
          brand: 'Kevin Murphy',
          type: ProductType.SHAMPOO,
          name: `Kevin Murphy Shampoo`,
          image: 'product'
        },
        {
          id: 8,
          brand: 'Kevin Murphy',
          type: ProductType.CONDITIONER,
          name: `Redken Conditioner`,
          image: 'product'
        }
      ]
    },
    {
      brandName: 'IGK',
      products: [
        {
          id: 9,
          brand: 'IGK',
          type: ProductType.STYLIST_SUPPLY,
          name: `Coloura Color`,
          image: 'product'
        },
        {
          id: 10,
          brand: 'IGK',
          type: ProductType.STYLIST_SUPPLY,
          name: `IGK Color 2`,
          image: 'product'
        }
      ]
    },
    {
      brandName: 'Amika',
      products: [
        {
          id: 11,
          brand: 'Amika',
          type: ProductType.SHAMPOO,
          name: `Amika Shampoo`,
          image: 'product'
        },
        {
          id: 12,
          brand: 'Amika',
          type: ProductType.SHAMPOO,
          name: `Amika Shampoo 2`,
          image: 'product'
        }
      ]
    },
    {
      brandName: 'Voce',
      products: [
        {
          id: 13,
          brand: 'Voce',
          type: ProductType.SHAMPOO,
          name: `Voce Shampoo`,
          image: 'product'
        },
        {
          id: 14,
          brand: 'Voce',
          type: ProductType.SHAMPOO,
          name: `Voce Shampoo 2`,
          image: 'product'
        }
      ]
    },
    {
      brandName: 'Redken',
      products: []
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
