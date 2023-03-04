import { Component } from '@angular/core';

@Component({
  selector: 'app-present-main-stiper',
  templateUrl: './present-main-stiper.component.html',
  styleUrls: ['./present-main-stiper.component.scss']
})
export class PresentMainStiperComponent {
  stipereventIndex:any
  updatesteper(i: any) {
    this.stipereventIndex = i;

  }
}
