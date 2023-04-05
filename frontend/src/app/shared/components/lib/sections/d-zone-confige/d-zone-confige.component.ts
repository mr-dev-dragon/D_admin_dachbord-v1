import { Component } from '@angular/core';
import { paramiter } from 'src/app/shared/models/d_zoon.model';

@Component({
  selector: 'd-zone-confige',
  templateUrl: './d-zone-confige.component.html',
  styleUrls: ['./d-zone-confige.component.scss'],
})
export class DZoneConfigeComponent {
  changeDirection() {
  //   this.dir = this.dir == 'horizontal' ? 'vertical' : 'horizontal';
  //   [this.width, this.height] = [this.height, this.width];
  //   this.subCells.forEach((item) => {
  //     item.changeDirection();
  //   });
  }
  parameter: paramiter[] = [
    {
      d_zoonHeight: 0,
      d_zoonWidth: 0,
      d_zoonHeightUnit: 'px',
      d_zoonWidthUnit: 'px',
      d_zoonrowUnit: 'px',
      d_zoonColUnit: 'px',
      d_zoonDiraction: 'horizontal',
    },
  ];
}
