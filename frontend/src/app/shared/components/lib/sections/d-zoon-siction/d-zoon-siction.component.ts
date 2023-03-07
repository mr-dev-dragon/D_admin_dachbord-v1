
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-zoon-siction',
  templateUrl: './d-zoon-siction.component.html',
  styleUrls: ['./d-zoon-siction.component.scss'],
})
export class DZoonSictionComponent {
  // col = [20, 80];
  panelSizes: number[] = [20, 80];
  minSizes: number[] = [10, 10];
  row: any[] = [20, [20, [20, 80]]];
  col: any[] = [20, [80, [20, 80]]];

  ngOnInit() {}

  onResizeEnd($event: any) {}
  onResizeStart($event: any) {}
}
