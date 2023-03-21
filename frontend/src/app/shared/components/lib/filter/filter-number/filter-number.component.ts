import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'filter-by-number',
  templateUrl: './filter-number.component.html',
  styleUrls: ['./filter-number.component.scss'],
})
export class FilterNumberComponent {
  @Input() clearfilter: boolean = false;
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
    if (change['rule'] || change['inData']) {
      this.filterConfige(this.inputVal);
    }
    if (change['inputvalue']) {
      this.inputVal == this.inputvalue;
      if (this.inputvalue == 0) {
        this.outData.emit(this.inData);
        this.inputVal = 0;
        this.filterConfige(this.inputVal);
      }
    }
  }
  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
    this.inputvalue && (this.inputVal = this.inputvalue);
  }

  filterConfige(a:any) {
    this.outinputValue.emit(a);
    clearTimeout(this.setTimeOutId);
    this.setTimeOutId = setTimeout(() => {
      let filterInputValue: any = a;

      if (filterInputValue && this.path && this.inData) {
        let reusltdata = this.filter(filterInputValue, this.rule);
        this.outData.emit(reusltdata);
      } else if (!filterInputValue) this.outData.emit(this.inData);
    }, 350);
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
