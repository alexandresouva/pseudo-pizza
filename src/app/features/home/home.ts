import { Component, inject } from '@angular/core';
import { Menu } from './ui/menu/menu';
import { Products } from './services/products';
import { AsyncPipe } from '@angular/common';
import { Button } from '../../ui/button/button';

@Component({
  selector: 'app-home',
  imports: [Menu, AsyncPipe, Button],
  templateUrl: './home.html',
  host: {
    class: 'flex flex-col items-center gap-12'
  }
})
export class Home {
  private readonly productsService = inject(Products);

  protected readonly products$ = this.productsService.getAll();
  protected readonly openingHours = {
    open: '12:00',
    close: '22:00'
  };
}
