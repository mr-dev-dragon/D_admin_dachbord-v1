import { Component, EventEmitter, Input, Output } from '@angular/core';
import { addArrays } from 'src/app/shared/global/filter-tool';
import { filterParameter } from 'src/app/shared/models/List.model';
@Component({
  selector: 'filter-number-rule-template',
  templateUrl: './filter-number-rule-template.component.html',
  styleUrls: ['./filter-number-rule-template.component.scss'],
})
export class FilterNumberRuleTemplateComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string = '';
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any> = new EventEmitter();
  @Input() inParameter!: filterParameter;
  @Output() outParameter: EventEmitter<any> =
    new EventEmitter<filterParameter>();
  parameter: filterParameter = {
    sectiontwo: false,
    MatchType: 'match any',
    filterTypeOne: '==',
    filterTypeTwo: '==',
    inputValueOne: '',
    inputValueTwo: '',
  };
  filterOne!: any[];
  filtertwo!: any[];
  allFeltedData!: any;
  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(this.parameter);
    this.inParameter ? (this.parameter = this.inParameter) : '';
  }

  sectiontwoF: () => void = () =>
    (this.parameter.sectiontwo = !this.parameter.sectiontwo);
  sendParamiter: () => void = () => this.outParameter.emit(this.parameter);
  outDataFunctionOne: (a: any[]) => void = (a) => (this.filterOne = a);
  outDataFunctionTwo: (a: any[]) => void = (a) => (this.filtertwo = a);
  inputVlueFunctionOne: (a: number) => void = (a) => (
    (this.parameter.inputValueOne = a), this.sendParamiter() 
  );
  inputVlueFunctionTwo: (a: number) => void = (a) => (
    (this.parameter.inputValueTwo = a), this.sendParamiter()
  );
  apply: (a: any) => void = (a) =>
    a
      ? (this.parameter.MatchType == 'match any'
          ? (this.allFeltedData = addArrays<string>(
              this.filterOne,
              this.filtertwo
            ))
          : (this.allFeltedData = addArrays<string>(
              this.filterOne,
              this.filtertwo,
              false
            )),
        this.outData.emit(this.allFeltedData))
      : this.outData.emit(this.filterOne);
}
