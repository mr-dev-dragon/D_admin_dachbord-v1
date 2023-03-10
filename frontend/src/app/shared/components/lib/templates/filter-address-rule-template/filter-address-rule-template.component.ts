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
  sectiontwo: boolean = false;

  MatchType: any = 'match any';
  filterTypeOne: any = 'starts with';
  filterTypeTwo: any = 'starts with';
  filterOne!: any[];
  filterTwo!: any[];
  allFeltedData!: any;

  ngOnInit(): void {}

  outDataFunctionOne(a: any) {
    this.filterOne = a;
  }

  outDataFunctionTwo(a: any) {
    this.filterTwo = a;
  }

  sectiontwoF() {
    this.sectiontwo = !this.sectiontwo;
  }
  apply(a: any) {
    console.log(this.filterTypeOne);
    if (a) {
      this.MatchType == 'match any'
        ? (this.allFeltedData = addArrays<string>(
            this.filterOne,
            this.filterTwo
          ))
        : (this.allFeltedData = addArrays<string>(
            this.filterOne,
            this.filterTwo,
            false
          ));
      this.outData.emit(this.allFeltedData);
    } else {
      this.outData.emit(this.filterOne);
    }
  }
}
