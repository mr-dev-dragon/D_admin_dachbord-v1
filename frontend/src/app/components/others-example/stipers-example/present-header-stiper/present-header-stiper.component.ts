import { Component } from '@angular/core';

@Component({
  selector: 'app-present-header-stiper',
  templateUrl: './present-header-stiper.component.html',
  styleUrls: ['./present-header-stiper.component.scss']
})
export class PresentHeaderStiperComponent {
  stipereventIndex: any
  updatesteper(i: any) {
    this.stipereventIndex = i;

  }
}
