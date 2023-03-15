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
  filterTwo!: any[];
  allFeltedData!: any;
  apleyFiler: boolean = false;
  ngOnInit(): void {}
  clear: any = () => (
    (this.apleyFiler = false), this.outParameter.emit({}), this.apply()
  );

  ngAfterViewInit() {
    this.inParameter ? (this.parameter = this.inParameter) : '';
  }

  inputVlueFunctionOne: (a: number) => void = (a) =>
    (this.parameter.inputValueOne = a);

  outDataFunctionTwo: (a: any[]) => void = (a) => (
    (this.filterTwo = a), this.apply()
  );

  sectiontwoF: () => void = () =>
    (this.parameter.sectiontwo = !this.parameter.sectiontwo);
  outDataFunctionOne: (a: any[]) => void = (a) => (
    (this.filterOne = a), this.apply()
  );

  inputVlueFunctionTwo: (a: number) => void = (a) =>
    (this.parameter.inputValueTwo = a);

  // apply: () => void = () =>
  //   this.apleyFiler
  //     ? this.parameter.sectiontwo
  //       ? (this.parameter.MatchType == 'match any'
  //           ? (this.allFeltedData = addArrays<string>(
  //               this.filterOne,
  //               this.filterTwo
  //             ))
  //           : (this.allFeltedData = addArrays<string>(
  //               this.filterOne,
  //               this.filterTwo,
  //               false
  //             )),
  //         this.outData.emit(this.allFeltedData))
  //       : this.outData.emit(this.filterOne)
  //     : this.outData.emit(this.inData);

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
