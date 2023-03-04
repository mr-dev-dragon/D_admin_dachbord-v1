import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { isThisQuarter } from 'date-fns';
import { addArrays } from 'src/app/shared/global/filter-tool';
// import { combineArraysWithoutDuplicates } from 'src/app/shared/global/filter-tool';
@Component({
  selector: 'filter-text-rule-template',
  templateUrl: './filter-text-rule-template.component.html',
  styleUrls: ['./filter-text-rule-template.component.scss'],
})
export class FilterTextRuleTemplateComponent implements OnInit {
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















