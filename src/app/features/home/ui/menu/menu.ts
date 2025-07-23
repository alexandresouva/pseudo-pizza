import { Component, input } from '@angular/core';
import { MenuItem } from './menu-item/menu-item';
import { MenuProduct } from '../../models/menu-product.model';

@Component({
  selector: 'app-menu',
  imports: [MenuItem],
  template: `
    <ul class="grid grid-cols-1 gap-12 sm:grid-cols-2">
      @for (product of products(); track product.imageHref) {
        <app-menu-item [item]="product" />
      }
    </ul>
  `
})
export class Menu {
  products = input.required<MenuProduct[]>();
}
