import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-date-rule-template',
  templateUrl: './filter-date-rule-template.component.html',
  styleUrls: ['./filter-date-rule-template.component.scss'],
})
export class FilterDateRuleTemplateComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any> = new EventEmitter();
  sectiontow: boolean = false;

  outDataFunction(a: any) {
    this.outData.emit(a);
  }

  sectiontowF() {
    this.sectiontow = !this.sectiontow;
  }
  
}
