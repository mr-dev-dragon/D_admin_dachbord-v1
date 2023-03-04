import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-number-rule-template',
  templateUrl: './filter-number-rule-template.component.html',
  styleUrls: ['./filter-number-rule-template.component.scss'],
})
export class FilterNumberRuleTemplateComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any> = new  EventEmitter();
  sectiontow: boolean = false;

  outDataFunction(a: any) {
    this.outData.emit(a);
  }

  sectiontowF() {
    this.sectiontow = !this.sectiontow;
  }
}
