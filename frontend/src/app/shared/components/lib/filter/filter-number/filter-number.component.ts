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
  @Input() rule: '==' | '!=' | '>' | '>=' | '<' | '<=' = '==';
  @Input() inData!: any[];
  @Output() outData = new EventEmitter();

















  inputVal!: number;

  ngOnChanges(change: SimpleChanges): void {
    if (change['rule']) {
      console.log(this.rule);
      this.filterBy(this.inputVal, true);
    }
  }

  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
  }

  filterBy(event: any, fromTs: boolean = false) {
    let filterInputValue: any;
    fromTs
      ? (filterInputValue = event)
      : (filterInputValue = event.target.value);

    if (filterInputValue && this.path && this.inData) {
      let reusltdata = this.filter(filterInputValue, this.rule);
      this.outData.emit(reusltdata);
    } else if (!filterInputValue) this.outData.emit(this.inData);
  }

  filter(filterInputValue: any, operator: string) {
    let reusltdata: any;

      reusltdata = this.inData.filter((item) => {
        switch (operator) {
          case '==':
            return item[this.path] == filterInputValue;
          case '!=':
            return item[this.path] !== filterInputValue;
          case '>':
            return item[this.path] > filterInputValue;
          case '>=':
            return item[this.path] >= filterInputValue;
          case '<':
            return item[this.path] < filterInputValue;
          case '<=':
            return item[this.path] <= filterInputValue;
          default:
            return true;
        }
      });
      console.log('========================>', 'operator ==> ' ,operator ,'kkkkkkk' ,reusltdata);

    return reusltdata;
  }
}
