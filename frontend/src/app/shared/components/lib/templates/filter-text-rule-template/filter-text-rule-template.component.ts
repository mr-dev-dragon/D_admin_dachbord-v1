import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges, AfterViewInit } from '@angular/core';
import { isThisQuarter } from 'date-fns';
import { addArrays } from 'src/app/shared/global/filter-tool';
// import { combineArraysWithoutDuplicates } from 'src/app/shared/global/filter-tool';
@Component({
  selector: 'filter-text-rule-template',
  templateUrl: './filter-text-rule-template.component.html',
  styleUrls: ['./filter-text-rule-template.component.scss'],
})
export class FilterTextRuleTemplateComponent implements OnInit ,AfterViewInit {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Input() inParameter!: any;
  @Output() outData: EventEmitter<any> = new EventEmitter();

  @Output() outParameter: EventEmitter<any> = new EventEmitter();
  parameter!: {};


 ngAfterViewInit(): void {
 console.log(this.inParameter);
    this.parameter = {
      sectiontow:    this.inParameter.sectiontow,
      MatchType:     this.inParameter.MatchType,
      filterTypeOne: this.inParameter.filterTypeOne,
      filterTypeTow: this.inParameter.filterTypeTow,
      filterOne:     this.inParameter.filterOne,
      filterTow:     this.inParameter.filterTow,
    };
 }




  sectiontow: boolean = false;
  MatchType: any = 'match any';
  filterTypeOne: any = 'starts with';
  filterTypeTow: any = 'starts with';
  filterOne!: any[];
  filterTow!: any[];
  allFeltedData!: any;

  ngOnInit(): void {
    this.parameter = {
      sectiontow: this.sectiontow,
      MatchType: this.MatchType,
      filterTypeOne: this.filterTypeOne,
      filterTypeTow: this.filterTypeTow,
      filterOne: this.filterOne,
      filterTow: this.filterTow,
    };
  }

  outDataFunctionOne(a: any) {
    this.outParameter.emit(this.parameter);
    this.filterOne = a;
  }

  outDataFunctionTow(a: any) {
    this.outParameter.emit(this.parameter);
    this.filterTow = a;
  }

  sectiontowF() {
    this.sectiontow = !this.sectiontow;
  }
  apply(a: any) {
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
      this.outParameter.emit(this.parameter);
    } else {
      this.outData.emit(this.filterOne);
      this.outParameter.emit(this.parameter);
    }
  }
}















