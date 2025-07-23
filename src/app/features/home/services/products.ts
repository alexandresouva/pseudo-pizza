import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MenuProduct } from '../models/menu-product.model';
import { PRODUCTS_MOCK } from '../utils/mocks/menu-products.mock';

@Injectable({
  providedIn: 'root'
})
export class Products {
  getAll(): Observable<MenuProduct[]> {
    // Simulate a request
    return of(PRODUCTS_MOCK).pipe(delay(200));
  }
}
