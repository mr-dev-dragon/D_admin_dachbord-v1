import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  SimpleChanges,
  AfterViewInit,
  OnChanges,
} from '@angular/core';
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
  filterOne!: any[];
  filterTwo!: any[];
  allFeltedData!: any;
  apleyFiler: boolean = false;

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

  clear() {
    this.apleyFiler = false;
    this.outParameter.emit({});
  }
  ngAfterViewInit(): void {
    this.inParameter ? (this.parameter = this.inParameter) : '';
  }

  inputVlueFunctionOne(a: any) {
    this.parameter.inputValueOne = a;
  }
  inputVlueFunctionTwo(a: any) {
    this.parameter.inputValueTwo = a;
  }
  ngOnInit(): void {}
  outDataFunctionOne(a: any) {
    this.filterOne = a;
    this.apply();
  }
  outDataFunctionTwo(a: any) {
    this.filterTwo = a;
    this.apply();
  }
  sectiontwoF() {
    this.parameter.sectiontwo = !this.parameter.sectiontwo;
  }
  apply() {
    if (this.apleyFiler) {
      if (this.parameter.sectiontwo) {
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
    } else {
      this.outData.emit(this.inData);
    }
  }
  sendParameter: any = () => this.outParameter.emit(this.parameter);
}
