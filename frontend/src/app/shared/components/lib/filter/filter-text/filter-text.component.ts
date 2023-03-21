import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { g, removeAccent } from 'src/app/shared/global/filter-tool';
@Component({
  selector: 'filter-by-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.scss'],
})
export class FilterTextComponent implements OnChanges {
  @Input() clearfilter: boolean = false;
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inputvalue: string = '';
  @Input() inData: any[] = [];
  @Output() outData: EventEmitter<any[]> = new EventEmitter();
  @Output() outinputValue: EventEmitter<any> = new EventEmitter();
  @Input() rule:
    | 'starts with'
    | 'contains'
    | 'not Contains'
    | 'end with'
    | 'equals'
    | 'not equals' = 'starts with';
  pevinData: any;
  inputVal: string = '';
  setTimeOutId: any = -1;
  ngOnChanges(change: SimpleChanges): void {
    if (change['rule'] || change['inData']) {
      this.filterConfige(this.inputVal);
    }
    if (change['inputvalue']) {
      this.inputVal == this.inputvalue;
      if (this.inputvalue == '') {
        this.outData.emit(this.inData);
        this.inputVal = '';
        this.filterConfige(this.inputVal);
      }
    }
  }
  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
    this.inputvalue && (this.inputVal = this.inputvalue);
  }
  filterConfige(a: any) {
    this.outinputValue.emit(a);
    clearTimeout(this.setTimeOutId);
    this.setTimeOutId = setTimeout(() => {
      let filterInputValue = a;
      if (filterInputValue != '' && this.path && this.inData) {
        let reusltdata = this.filter(filterInputValue);
        this.outData.emit(reusltdata);
      } else if (filterInputValue == '') this.outData.emit(this.inData);
    }, 350);
  }
  filter(filterInputValue: string) {
    return this.inData.filter((item) =>
      this.path instanceof Array
        ? this.path.some((key) => this.find(g(key, item), filterInputValue))
        : this.find(g(this.path, item), filterInputValue)
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
      default:
        console.error('no rule for  matching');
        return false;
    }
  }
}
