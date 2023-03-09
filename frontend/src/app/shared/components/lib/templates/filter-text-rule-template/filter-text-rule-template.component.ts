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
  @Input() inParameter!: filterParameter;
  @Output() outData: EventEmitter<any> = new EventEmitter();

  @Output() outParameter: EventEmitter<any> = new EventEmitter();
  parameter: filterParameter = {
    sectiontow: false,
    MatchType: 'match any',
    filterTypeOne: 'starts with',
    filterTypeTow: 'starts with',
    inputValueOne: '',
    inputValueTow: '',
  };

  ngAfterViewInit(): void {
    this.inParameter ? (this.parameter = this.inParameter) : '';
  }


  // sectiontow: boolean = false;
  // MatchType: any = 'match any';
  // filterTypeOne: any = 'starts with';
  // filterTypeTow: any = 'starts with';
  filterOne!: any[];
  filterTow!: any[];
  allFeltedData!: any;
  // inputValueOne: any;
  // inputValueTow: any;

  inputVlueFunctionOne(a: any) {
    this.parameter.inputValueOne = a;
    console.log('aaaaaaaaaaaaaaaaaaaaaaaa');
  }
  inputVlueFunctionTow(a: any) {
    this.parameter.inputValueTow = a;
  }

  ngOnInit(): void {}

  outDataFunctionOne(a: any) {
    this.filterOne = a;
  }

  outDataFunctionTow(a: any) {
    this.filterTow = a;
  }

  sectiontowF() {
    this.parameter.sectiontow = !this.parameter.sectiontow;
  }
  apply(a: any) {
    this.outParameter.emit(this.parameter);
    if (a) {
      this.parameter.MatchType == 'match any'
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















