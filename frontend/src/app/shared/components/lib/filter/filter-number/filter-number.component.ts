import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
import { g } from 'src/app/shared/global/filter-tool';
@Component({
  selector: 'filter-by-number',
  templateUrl: './filter-number.component.html',
  styleUrls: ['./filter-number.component.scss'],
})
export class FilterNumberComponent {
  @Input() label: string | string[] = 'text';
  @Input() path: string = '';
  @Input() inData!: any[];
  @Output() outData = new EventEmitter();
  @Input() inputvalue: number = 0;
  @Output() outinputValue: EventEmitter<any> = new EventEmitter();
  @Input() rule: '==' | '!=' | '>' | '>=' | '<' | '<=' = '==';
  inputVal: number = 0;
  setTimeOutId: any = -1;
  ngOnChanges(change: SimpleChanges): void {
    change['rule'] ? this.filterBy(this.inputvalue, true) : '';
  }
  ngOnInit: any = () => (
    this.outData.emit(this.inData),
    this.inputvalue != 0 ? (this.inputVal = this.inputvalue) : ''
  );


  filterBy(event: any, fromTs: boolean = false) {
    this.outinputValue.emit(event);
    clearTimeout(this.setTimeOutId);
    this.setTimeOutId = setTimeout(() => {
      let filterInputValue: any;
      fromTs
        ? (filterInputValue = event)
        : (filterInputValue = event.target.value);

      if (filterInputValue && this.path && this.inData) {
        let reusltdata = this.filter(filterInputValue, this.rule);
        this.outData.emit(reusltdata);
      } else if (!filterInputValue) this.outData.emit(this.inData);
    }, 150);
  }

  filter(filterInputValue: any, operator: string) {
    let reusltdata: any;

    reusltdata = this.inData.filter((item) => {
      let sitem = item[this.path];
      switch (operator) {
        case '==':
          return sitem == filterInputValue;
        case '!=':
          return sitem !== filterInputValue;
        case '>':
          return sitem > filterInputValue;
        case '>=':
          return sitem >= filterInputValue;
        case '<':
          return sitem < filterInputValue;
        case '<=':
          return sitem <= filterInputValue;
        default:
          return true;
      }
    });

    return reusltdata;
  }
}
