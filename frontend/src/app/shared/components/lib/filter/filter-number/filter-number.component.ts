import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { g } from 'src/app/shared/global/filter-tool';
@Component({
  selector: 'filter-by-number',
  templateUrl: './filter-number.component.html',
  styleUrls: ['./filter-number.component.scss'],
})
export class FilterNumberComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Input() operator: string = '==';
  @Output() outData = new EventEmitter();
  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
  }

  filterBy(event: any) {
    let filterInputValue = event.target.value;
    if (filterInputValue && this.path && this.inData) {
      let reusltdata = this.filter(filterInputValue, this.operator);
      this.outData.emit(reusltdata);
    } else if (filterInputValue == '') this.outData.emit(this.inData);
  }

  filter(filterInputValue: any, operator: string ) {
    let reusltdata:any
    let path =this.path
       if (this.operator || filterInputValue) {
             let reusltdata = this.inData.filter((item) => {
               switch (operator) {
                 case '==':
                   return item.path === filterInputValue;
                 case '!=':
                   return item.path !== filterInputValue;
                 case '>':
                   return item.path > filterInputValue;
                 case '>=':
                   return item.path >= filterInputValue;
                 case '<':
                   return item.path < filterInputValue;
                 case '<=':
                   return item.path <= filterInputValue;
                 default:
                   return true;
               }
             });

        }
    return reusltdata;

  }
}
