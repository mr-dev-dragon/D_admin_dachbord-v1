import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { g } from 'src/app/shared/global/filter-tool';
import { filterParameter } from 'src/app/shared/models/List.model';
@Component({
  selector: 'filter-by-range',
  templateUrl: './filter-range.component.html',
  styleUrls: ['./filter-range.component.scss'],
})
export class FilterRangeComponent {
  @Input() type: string | string[] = '';
  @Input() label: string | string[] = '';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Input() operator: string = '==';
  @Output() outData: EventEmitter<any> = new EventEmitter();
  @Input() inParameter!: filterParameter;
  @Output() outParameter: any = new EventEmitter();
  parameter: filterParameter = {
    inputValueOne: 80,
    inputValueTwo: 20,
    values: [20, 80],
  };
  @Input() rule!: 'lass then' | 'biger then';
  rangeValuesEnd: number = 80;
  rangeValuesStart: number = 20;
  rangeValues: any[] = [20, 80];
  renge: number[] = [0, 100];
  ngAfterViewInit(): void {
    this.rangeValuesEnd = this.parameter.inputValueOne;
    this.rangeValuesStart = this.parameter.inputValueTwo;
    // this.rangeValues = this.parameter.values;
    this.outData.emit(this.inData);
  }
  // ngOnChanges(change: SimpleChanges): void {
  //   if (change['rangeValuesStart']) {
  //     this.rangeValuesStart < this.renge[0]
  //       ? (this.rangeValuesStart = this.renge[0])
  //       : '';
  //   }
  //   if (change['rangeValuesEnd']) {
  //     this.rangeValuesEnd > this.renge[1]
  //       ? (this.rangeValuesEnd = this.renge[1])
  //       : '';
  //   }
  // }
  var: any;


  handleChange(e: any, type: string = 'slider') {

    type == 'slider'

      ? (e.values[0] < this.renge[0]
        ? (this.parameter.inputValueOne = this.renge[0])
        : (this.parameter.inputValueOne = e.values[0]),

        e.values[1] > this.renge[1]
          ? (this.parameter.inputValueTwo = this.renge[1])
          : (this.parameter.inputValueTwo = e.values[1]))

      : '';
     type == 'input'
      ? (
      (this.parameter.values = []),
        ( this.parameter.values = [
          this.parameter.inputValueOne,
          this.parameter.inputValueTwo,
        ]
        )
        )
      : '';

  }




  rangeF() {
    this.rangeValues = [this.rangeValuesStart, this.rangeValuesEnd];
    this.parameter = {
      inputValueOne: this.rangeValuesStart,
      inputValueTwo: this.rangeValuesEnd,
      valueOne: this.renge[0],
      valueTwo: this.renge[1],
      values: this.rangeValues,
    };
  }
  ngOnInit(): void {}
  inputVal = '';
  setTimeOutId: any = -1;
  clearDataVar: boolean = false;
  clearFiler() {
    this.clearDataVar = true;
  }
  filterBy() {
    clearTimeout(this.setTimeOutId);
    this.setTimeOutId = setTimeout(() => {
      let filterInputValue = [this.rangeValuesStart, this.rangeValuesEnd];
      if (!this.clearDataVar && this.path && this.inData) {
        let reusltdata = this.filter(filterInputValue);
        this.outData.emit(reusltdata);
      } else if (this.clearDataVar) this.outData.emit(this.inData);
    }, 150);
    this.parameter = {
      inputValueOne: this.rangeValuesStart,
      inputValueTwo: this.rangeValuesEnd,
      valueOne: this.renge[0],
      valueTwo: this.renge[1],
      values: this.rangeValues,
    };
  }
  filter(filterInputValue: number[]) {
    return this.inData.filter((i) =>
      this.path instanceof Array
        ? this.path.some((k) => this.find(g(k, i), filterInputValue))
        : this.find(g(this.path, i), filterInputValue)
    );
  }
  find(findIn: number, findBy: number[]): boolean {
    if (!(findIn && findBy)) return false;
    if (findBy[0] >= findIn && findIn <= findBy[1]) {
      return true;
    }
    return !!(findBy[0] >= findIn || findIn <= findBy[1]);
  }
  sendParameter: any = () => this.outParameter.emit(this.parameter);
}

