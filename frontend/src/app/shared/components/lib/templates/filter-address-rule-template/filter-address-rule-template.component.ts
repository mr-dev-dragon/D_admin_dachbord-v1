import { Component, EventEmitter, Input, Output } from '@angular/core';
import { addArrays } from 'src/app/shared/global/filter-tool';

@Component({
  selector: 'app-filter-address-rule-template',
  templateUrl: './filter-address-rule-template.component.html',
  styleUrls: ['./filter-address-rule-template.component.scss'],
})
export class FilterAddressRuleTemplateComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any> = new EventEmitter();
  sectiontow: boolean = false;

  MatchType: any = 'match any';
  filterTypeOne: any = 'starts with';
  filterTypeTow: any = 'starts with';
  filterOne!: any[];
  filterTow!: any[];
  allFeltedData!: any;

  ngOnInit(): void {}

  outDataFunctionOne(a: any) {
    this.filterOne = a;
  }

  outDataFunctionTow(a: any) {
    this.filterTow = a;
  }

  sectiontowF() {
    this.sectiontow = !this.sectiontow;
  }
  apply(a: any) {
    console.log(this.filterTypeOne);
    if (a) {
      this.MatchType == 'match any'
        ? (this.allFeltedData = addArrays<string>(
            this.filterOne,
            this.filterTow
          ))
        : (this.allFeltedData = addArrays<string>(
            this.filterOne,
            this.filterTow,
            false
          ));
      this.outData.emit(this.allFeltedData);
    } else {
      this.outData.emit(this.filterOne);
    }
  }
}
