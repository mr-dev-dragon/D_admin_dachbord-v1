import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges, AfterViewInit } from '@angular/core';
import { isThisQuarter } from 'date-fns';
import { addArrays } from 'src/app/shared/global/filter-tool';
import { filterParameter } from 'src/app/shared/models/List.model';
// import { combineArraysWithoutDuplicates } from 'src/app/shared/global/filter-tool';
@Component({
  selector: 'filter-text-rule-template',
  templateUrl: './filter-text-rule-template.component.html',
  styleUrls: ['./filter-text-rule-template.component.scss'],
})
export class FilterTextRuleTemplateComponent implements OnInit, AfterViewInit {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any> = new EventEmitter();
  @Input() inParameter!: filterParameter;
  @Output() outParameter: EventEmitter<any> = new EventEmitter();
  parameter: filterParameter = {
    sectiontwo: false,
    MatchType: 'match any',
    filterTypeOne: 'starts with',
    filterTypeTwo: 'starts with',
    inputValueOne: '',
    inputValueTwo: '',
  };
  ngAfterViewInit(): void {
    this.inParameter ? (this.parameter = this.inParameter) : '';
  }
  // sectiontwo: boolean = false;
  // MatchType: any = 'match any';
  // filterTypeOne: any = 'starts with';
  // filterTypeTwo: any = 'starts with';
  filterOne!: any[];
  filterTwo!: any[];
  allFeltedData!: any;
  // inputValueOne: any;
  // inputValueTwo: any;
  inputVlueFunctionOne(a: any) {
    this.parameter.inputValueOne = a;
  }
  inputVlueFunctionTwo(a: any) {
    this.parameter.inputValueTwo = a;
  }
  ngOnInit(): void {}
  outDataFunctionOne(a: any) {
    this.filterOne = a;
  }
  outDataFunctionTwo(a: any) {
    this.filterTwo = a;
  }
  sectiontwoF() {
    this.parameter.sectiontwo = !this.parameter.sectiontwo;
  }
  apply(a: any) {
    this.outParameter.emit(this.parameter);
    if (a) {
      this.parameter.MatchType == 'match any'
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
