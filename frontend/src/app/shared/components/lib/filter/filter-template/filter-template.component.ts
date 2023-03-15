import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { filterParameter } from 'src/app/shared/models/List.model';

@Component({
  selector: 'filter-By-template',
  templateUrl: './filter-template.component.html',
  styleUrls: ['./filter-template.component.scss'],
})
export class FilterTemplateComponent {
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inputvalue: string = '';
  @Input() inData: any[] = [];
  @Output() outData: EventEmitter<any[]> = new EventEmitter();
  @Output() outinputValue: EventEmitter<any> = new EventEmitter();
  apleyFiler: boolean = false;
  @Input() rule:
    | 'starts with'
    | 'contains'
    | 'not Contains'
    | 'end with'
    | 'equals'
    | 'not equals' = 'starts with';

  @Input() inParameter!: filterParameter;
  @Output() outParameter: EventEmitter<any> = new EventEmitter();
  parameter!: filterParameter;
  ngOnChanges(change: SimpleChanges): void {
    if (change['inData']) {
      this.filterConfige();
    }
  }
  filterConfige() {
    let reusltdata = this.inData;
    this.apleyFiler
      ? this.outData.emit(reusltdata)
      : this.outData.emit(this.inData);
  }
  ngOnInit(): void {
    this.inParameter
      ? (this.parameter = this.inParameter)
      : (this.parameter = {
          value: ['parameter has to be here'],
        });
    this.sendParameter();
    this.outData.emit(this.inData);
  }
  apply() {
    this.apleyFiler = true;
  }
  clear() {
    this.apleyFiler = false;
    this.outParameter.emit({});
  }
  sendParameter: any = (a: any = true) =>
    this.outParameter.emit(this.parameter);
}
