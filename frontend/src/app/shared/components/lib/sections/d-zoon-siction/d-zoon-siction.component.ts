
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-zoon-siction',
  templateUrl: './d-zoon-siction.component.html',
  styleUrls: ['./d-zoon-siction.component.scss'],
})
export class DZoonSictionComponent {
  // col = [20, 80];
  minSizes: number[] = [10, 10];
  row: any[] = [20, [20, [20, 80]]];
  col: any[] = [30, [30, [20, 80]]];

  panelSizes: any = [
    { row: 20, col: [20, [20, [20, 80]]] },
    { row: 40, col: [80, 20] },
    { row: 20, col: [20, [20, [20, 80]]] },
    { row: [20, [20, 80]], col: [20, [20, [20, 80]]] },
  ];

  a = {
    originalEvent: { isTrusted: true },
    sizes: [44.307196562835664, 55.47798066595059],
  };

  resizwvalue: boolean = false;
  type!: string;
  index!: number | any[];

  ngOnInit() {}

  onResizeStart(
    event: any,
    type: 'col' | 'row',
    index: number | any[],

  ){
    this.resizwvalue = event;
  }

  onResizeEnd(
    event: any,
    type: 'col' | 'row',
    index: number | any[],
  ) {
    this.resizwvalue = event;
    this.type = type
    this.index = index
  }

}
