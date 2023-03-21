import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Input() clearfilter: boolean = false;
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any> = new EventEmitter();
  @Input() inParameter!: filterParameter;
  @Output() outParameter: EventEmitter<any> =
    new EventEmitter<filterParameter>();
    parameter!: filterParameter;
  clear() {
    this.apleyFiler = false;
    this.outParameter.emit(null);
    this.parameter.inputValueOne = 0;
    this.parameter.inputValueTwo = 0;
    this.inputVlueFunctionOne(0);
    this.inputVlueFunctionTwo(0);
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
            filterTypeOne: '==',
            filterTypeTwo: '==',
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
          filterTypeOne: '==',
          filterTypeTwo: '==',
          inputValueOne: '',
          inputValueTwo: '',
        });
  }

  filterOne!: any[];
  filterTwo!: any[];
  allFeltedData!: any;
  apleyFiler: boolean = false;
  inputVlueFunctionOne: (a: number) => void = (a) =>
    (this.parameter.inputValueOne = a);

  outDataFunctionTwo: (a: any[]) => void = (a) => (this.filterTwo = a);

  sectiontwoF: () => void = () =>
    (this.parameter.sectiontwo = !this.parameter.sectiontwo);

  outDataFunctionOne: (a: any[]) => void = (a) => (this.filterOne = a);

  inputVlueFunctionTwo: (a: number) => void = (a) =>
    (this.parameter.inputValueTwo = a);


  // apply() {
  //   if (this.apleyFiler) {
  //     if (this.parameter.sectiontwo) {
  //       this.parameter.MatchType == 'match any'
  //         ? (this.allFeltedData = addArrays<string>(
  //             this.filterOne,
  //             this.filterTwo
  //           ))
  //         : (this.allFeltedData = addArrays<string>(
  //             this.filterOne,
  //             this.filterTwo,
  //             false
  //           ));
  //       this.outData.emit(this.allFeltedData);
  //     } else {
  //       this.outData.emit(this.filterOne);
  //     }
  //   } else {
  //     this.outData.emit(this.inData);
  //   }
  // }

  apply() {
    if (this.apleyFiler) {
      if (this.parameter.sectiontwo) {
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
