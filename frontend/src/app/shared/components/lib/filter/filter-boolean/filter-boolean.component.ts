import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-by-boolean',
  templateUrl: './filter-boolean.component.html',
  styleUrls: ['./filter-boolean.component.scss'],
})
export class FilterBooleanComponent {
  checkboxValue: boolean = false;
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

  @Input() inData!: any[];
  @Output() outData: EventEmitter<any[]> = new EventEmitter();

  filterByBoolean() {

  
    //   if (this.path != '' && this.inData) {
    //     this.inData = this.filter(
    //       this.inData,
    //       {
    //         path: this.path,
    //         filterbythis: this.checkboxValue,
    //       },
    //       'boolean'
    //     );

    //     this.outData.emit(this.inData);
    //   }
    // }


  }


}
