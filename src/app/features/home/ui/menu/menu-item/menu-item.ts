import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MenuProduct } from '../../../models/menu-product.model';

@Component({
  selector: 'app-menu-item',
  imports: [CurrencyPipe],
  templateUrl: './menu-item.html'
})
export class MenuItem {
  item = input.required<MenuProduct>();
}
