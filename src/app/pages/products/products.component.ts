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
      showInListing: true,
      products: [
        {
          id: 1,
          type: ProductType.SHAMPOO,
          name: 'Oribe Shampoo 1',
          image: 'product'
        },
        {
          id: 2,
          type: ProductType.CONDITIONER,
          name: 'Oribe Conditioner 1',
          image: 'product'
        },
        {
          id: 3,
          type: ProductType.CONDITIONER,
          name: 'Oribe Conditioner 2',
          image: 'product'
        },
        {
          id: 4,
          type: ProductType.SHAMPOO,
          name: 'Oribe Shampoo 2',
          image: 'product'
        },
        {
          id: 5,
          type: ProductType.STYLING_PRODUCT,
          name: 'Oribe Styling Product 1',
          image: 'product'
        },
        {
          id: 6,
          type: ProductType.SHAMPOO,
          name: 'Oribe Shampoo 3',
          image: 'product'
        }
      ]
    },
    {
      brandName: 'Kevin Murphy',
      showInListing: true,
      products: [
        {
          id: 7,
          type: ProductType.SHAMPOO,
          name: `Kevin Murphy Shampoo`,
          image: 'product'
        },
        {
          id: 8,
          type: ProductType.CONDITIONER,
          name: `Redken Conditioner`,
          image: 'product'
        }
      ]
    },
    {
      brandName: 'IGK',
      showInListing: false,
      products: [
        {
          id: 9,
          type: ProductType.STYLIST_SUPPLY,
          name: `Coloura Color`,
          image: 'product'
        },
        {
          id: 10,
          type: ProductType.STYLIST_SUPPLY,
          name: `IGK Color 2`,
          image: 'product'
        }
      ]
    },
    {
      brandName: 'Amika',
      showInListing: false,
      products: [
        {
          id: 11,
          type: ProductType.SHAMPOO,
          name: `Amika Shampoo`,
          image: 'product'
        },
        {
          id: 12,
          type: ProductType.SHAMPOO,
          name: `Amika Shampoo 2`,
          image: 'product'
        }
      ]
    },
    {
      brandName: 'Voce',
      showInListing: true,
      products: [
        {
          id: 13,
          type: ProductType.SHAMPOO,
          name: `Voce Shampoo`,
          image: 'product'
        },
        {
          id: 14,
          type: ProductType.SHAMPOO,
          name: `Voce Shampoo 2`,
          image: 'product'
        }
      ]
    },
    {
      brandName: 'Redken',
      showInListing: false,
      products: []
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
