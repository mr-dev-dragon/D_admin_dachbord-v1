import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filterParameter } from 'src/app/shared/models/List.model';

@Component({
  selector: 'filter-By-multiSelect',
  templateUrl: './filter-multi-select.component.html',
  styleUrls: ['./filter-multi-select.component.scss'],
})
export class FilterMultiSelectComponent {
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

  @Input() inParameter!: filterParameter;
  @Output() outParameter: EventEmitter<any> = new EventEmitter();
  parameter: filterParameter = {
  
  };
}
