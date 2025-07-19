import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './ui/header/header';
import { Footer } from './ui/footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, Footer],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class Layout {}
