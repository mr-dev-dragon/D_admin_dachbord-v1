import { Page404Component } from './../../../page404/page404.component';
import { Component, EventEmitter, Input, Output,  OnChanges, SimpleChanges } from '@angular/core';
import { g, removeAccent } from 'src/app/shared/global/filter-tool';
@Component({
  selector: 'filter-by-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.scss'],
})
export class FilterTextComponent implements OnChanges {
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
  ngOnChanges(change: SimpleChanges): void {
    if (change['rule']) {
      console.log(this.rule);
        this.filterBy(this.inputVal);
    }
  }
  
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any[]> = new EventEmitter();

  inputVal=''
  setTimeOutId :any =-1

  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
  }
  filterBy(event: any) {
    console.log(event);

    clearTimeout(this.setTimeOutId)
    this.setTimeOutId =setTimeout(() => {
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
}











