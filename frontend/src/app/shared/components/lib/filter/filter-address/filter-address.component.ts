import { Page404Component } from './../../../page404/page404.component';
import { Component, EventEmitter, Input, Output,  OnChanges, SimpleChanges } from '@angular/core';
import { g, removeAccent } from 'src/app/shared/global/filter-tool';
import { filterParameter } from 'src/app/shared/models/List.model';
@Component({
  selector: 'filter-by-address',
  templateUrl: './filter-address.component.html',
  styleUrls: ['./filter-address.component.scss'],
})
export class FilterAddressComponent implements OnChanges {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData: any[] = [];
  @Output() outData: EventEmitter<any[]> = new EventEmitter();
  @Input() inParameter!: filterParameter;
  @Output() outParameter: EventEmitter<any> = new EventEmitter();
  parameter!: filterParameter;
  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
    this.inParameter
      ? (this.parameter = this.inParameter)
      : (this.parameter = {value:''});

  }
  @Input() rule:
    | 'starts with'
    | 'contains'
    | 'not Contains'
    | 'end with'
    | 'equals'
    | 'not equals' = 'starts with';
  ngOnChanges(change: SimpleChanges): void {
    if (change['rule']) {
      console.log(this.rule);
      this.filterBy(this.parameter.value);
    }
  }


  setTimeOutId: any = -1;
  filterBy(event: any) {
    this.sendParameter( event)
    console.log(event);
    clearTimeout(this.setTimeOutId);
    this.setTimeOutId = setTimeout(() => {
      let filterInputValue = event;
      if (filterInputValue && this.path && this.inData) {
        let reusltdata = this.filter(filterInputValue);
        this.outData.emit(reusltdata);
      } else if (filterInputValue == '') this.outData.emit(this.inData);
    }, 150);
  }
  filter(filterInputValue: string) {
    return this.inData.filter((i) =>
      this.path instanceof Array
        ? this.path.some((k) => this.find(g(k, i), filterInputValue))
        : this.find(g(this.path, i), filterInputValue)
    );
  }
  find(findIn: string, findBy: string): boolean {
    if (!(findIn && findBy)) return false;
    findIn = removeAccent(findIn.toLowerCase());
    findBy = removeAccent(findBy.toLowerCase());
    // let [first, ...other] = findBy.split('');
    switch (this.rule) {
      case 'starts with':
        return findIn.startsWith(findBy);
      case 'end with':
        return findIn.endsWith(findBy);
      case 'equals':
        return findIn == findBy;
      case 'not equals':
        return findIn !== findBy;
      case 'not Contains':
        return !findIn.includes(findBy);
      case 'contains':
        return findIn.includes(findBy);
    }
  }
  sendParameter: any = (a: any) => a ? this.outParameter.emit(this.parameter.value= a) : this.outParameter.emit(this.parameter);
}


