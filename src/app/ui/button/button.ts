import { Component } from '@angular/core';

@Component({
  selector: 'button[button]',
  imports: [],
  template: `<ng-content></ng-content>`,
  host: {
    class:
      'py-3.5 px-8 text-sm font-medium bg-brand cursor-pointer hover:bg-brand-hover'
  }
})
export class Button {}
