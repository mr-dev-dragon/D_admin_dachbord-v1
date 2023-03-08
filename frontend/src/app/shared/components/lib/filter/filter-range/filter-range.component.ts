import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { g, removeAccent } from 'src/app/shared/global/filter-tool';
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
  @Input() rule!: 'lass then' | 'biger then';
  rangeValuesEnd: number = 80;
  rangeValuesStart: number = 20;
  rangeValues: number[] = [20, 80];
  event: any;
  rengeStart: number = 0;
  rengeEnd: number = 100;
  ngOnChanges(change: SimpleChanges): void {
      if (change['rangeValuesStart']) {
       this.rangeValuesStart < this.rengeStart
         ? (this.rangeValuesStart = this.rengeStart)
         : '';

      }
    if (change['rangeValuesEnd']) {
    this.rangeValuesEnd > this.rengeEnd
      ? (this.rangeValuesEnd = this.rengeEnd)
      : '';

    }

  }
  handleChange(e: any) {
    this.event = e;

    this.rangeValuesStart = e.values[0];
    this.rangeValuesEnd = e.values[1];

    e.values[0] < this.rengeStart
      ? (this.rangeValuesStart = this.rengeStart)
      : '';
    e.values[1] > this.rengeEnd ? (this.rangeValuesEnd = this.rengeEnd) : '';


  }
  rangeF() {
    this.rangeValues = [this.rangeValuesStart, this.rangeValuesEnd];
  }

  ngOnInit(): void {}
  inputVal = '';
  setTimeOutId: any = -1;
  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
  }
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
    if (findBy[0] >= findIn && findIn <= findBy[1]) {return true;}

  return  !!(findBy[0] >= findIn || findIn <= findBy[1])
  }
}



const myArray: number[] = [2, 5, 10, 15, 20];

const minValue = 7;
const maxValue = 17;

const filteredArray = myArray.filter(num => num >= minValue && num <= maxValue);

console.log(filteredArray); // [10, 15]