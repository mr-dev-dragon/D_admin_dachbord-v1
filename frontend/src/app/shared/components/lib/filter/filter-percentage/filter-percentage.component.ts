import { AfterViewInit, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'filter-percentage',
  templateUrl: './filter-percentage.component.html',
  styleUrls: ['./filter-percentage.component.scss'],
})
export class FilterPercentageComponent implements OnInit, AfterViewInit {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Input() operator: string = '==';
  @Output() outData = new EventEmitter();
  ngAfterViewInit(): void {}
  range_val: number = 0;

  ngOnInit(): void {

    this.range_val < 0 ? (this.range_val = 0) : '';
    this.range_val > 100 ? (this.range_val = 100) : '';

  }
}
