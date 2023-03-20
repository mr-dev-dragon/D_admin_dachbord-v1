import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  SimpleChanges,
  AfterViewInit,
  OnChanges,
  SimpleChange,
} from '@angular/core';
import { trackByHourSegment } from 'angular-calendar/modules/common/util/util';
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
  @Input() clearfilter: boolean = false;
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any> = new EventEmitter();
  @Input() inParameter!: filterParameter;
  @Output() outParameter: EventEmitter<any> = new EventEmitter();
  parameter!: filterParameter;
  clear() {
    this.apleyFiler = false;
    this.outParameter.emit(null);
    this.parameter.inputValueOne = '';
    this.parameter.inputValueTwo = '';
    this.inputVlueFunctionOne('');
    this.inputVlueFunctionTwo('');
    this.apply();
  }
  ngOnChanges(change: SimpleChanges) {
    if (change['inData']) {
      this.apply();
    }
    if (change['inParameter']) {
      this.inParameter && this.inParameter.filterTypeOne
        ? (this.parameter = this.inParameter)
        : (this.parameter = {
            sectiontwo: false,
            MatchType: 'match any',
            filterTypeOne: 'starts with',
            filterTypeTwo: 'starts with',
            inputValueOne: '',
            inputValueTwo: '',
          });
      this.inputVlueFunctionOne(this.parameter.inputValueOne);
      this.inputVlueFunctionTwo(this.parameter.inputValueTwo);
    }
  }
  ngAfterViewInit(): void {
    this.inParameter && this.inParameter.filterTypeOne
      ? (this.parameter = this.inParameter)
      : (this.parameter = {
          sectiontwo: false,
          MatchType: 'match any',
          filterTypeOne: 'starts with',
          filterTypeTwo: 'starts with',
          inputValueOne: '',
          inputValueTwo: '',
        });
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
  }
  outDataFunctionTwo(a: any) {
    this.filterTwo = a;
  }
  sectiontwoF() {
    this.parameter.sectiontwo = !this.parameter.sectiontwo;
  }
  apply() {
    if (this.apleyFiler) {
      if (this.parameter.sectiontwo) {
        // this.allFeltedData = addArrays<string>(
        //   this.filterOne,
        //   this.filterTwo,
        //   this.parameter.MatchType == 'match any'
        // );
        // this.outData.emit(this.allFeltedData);
        this.outData.emit(
          this.parameter.MatchType == 'match any'
            ? addArrays<string>(this.filterOne, this.filterTwo)
            : this.filterTwo
        );
      } else if (!this.parameter.sectiontwo) {
        this.outData.emit(this.filterOne);
      }
    } else {
      this.outData.emit(this.inData);
    }
  }
  sendParameter: any = () => this.outParameter.emit(this.parameter);
}
