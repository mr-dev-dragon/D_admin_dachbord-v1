
import { Component, OnInit } from '@angular/core';
import { paramiter } from 'src/app/shared/models/d_zoon.model';

@Component({
  selector: 'd-zoon-siction',
  templateUrl: './d-zoon-siction.component.html',
  styleUrls: ['./d-zoon-siction.component.scss'],
})
export class DZoonSictionComponent {
  // col = [20, 80];

  justifyOptions: any[] = [{ btn: 'inputNumber' },{btn: 'select' }];

  paramiter: paramiter[] = [
    {
      d_zoonHeight: 0,
      d_zoonWidth: 0,
      d_zoonHeightUnit: 'px',
      d_zoonWidthUnit: 'px',
      d_zoonrowUnit: 'px',
      d_zoonColUnit: 'px',
    },
  ];

  minSizes: number[] = [10, 10];
  row: any[] = [20, [20, [20, 80]]];
  col: any[] = [30, [30, [20, 80]]];

  aplaysomedivs: any = [
    { rows: 20, cols: [20, [20, [20, 80]]] },
    { rows: 40, cols: [80, 20] },
    { rows: 20, cols: [20, [20, [20, 80]]] },
    { rows: [20, [20, 80]], col: [20, [20, [20, 80]]] },
  ];

  a = {
    originalEvent: { isTrusted: true },
    sizes: [44.307196562835664, 55.47798066595059],
  };

  resizwvalue: boolean = false;
  type!: string;
  index!: number | any[];

  ngOnInit() {}

  onResizeStart(event: any, type: 'col' | 'row', index: number | any[]) {
    this.resizwvalue = event;
  }


  onResizeEnd(event: any, type: 'col' | 'row', index: number | any[]) {
    this.resizwvalue = event;
    this.type = type;
    this.index = index;
  }
}
