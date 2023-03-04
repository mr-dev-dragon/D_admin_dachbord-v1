import { Component } from '@angular/core';

@Component({
  selector: 'bg-container',
  template: `
    <div class="uper ">
        <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .uper {
        background: #fff;
        border-radius: 0.5rem;
        margin:  0.7rem  0;
        padding: 0.7rem;
      }
    `,
    `

    `,
  ],
})
export class BgContainerComponent {}



