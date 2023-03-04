import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'filter-by-range',
  templateUrl: './filter-range.component.html',
  styleUrls: ['./filter-range.component.scss'],
})
export class FilterRangeComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() rule:
    | 'starts with'
    | 'contains'
    | 'not Contains'
    | 'end with'
    | 'equals'
    | 'not equals' = 'starts with';

  @Input() inData!: any[];
  @Output() outData: EventEmitter<any[]> = new EventEmitter();
  range_val: number = 0;
  rangeValuesRight: number = 80;
  rangeValuesLeft: number = 20;
  rangeValues: number[] = [];
  event: any;
  handleChange(e: any) {
    this.event = e;

    this.rangeValuesLeft = e.values[0];
    this.rangeValuesRight = e.values[1];
  }
  rangeF() {
    this.rangeValues = [this.rangeValuesLeft, this.rangeValuesRight];
  }
  ngOnChanges(change: SimpleChanges): void {
    if (change['rule']) {
      console.log(this.rule);
    }
  }
}
