import { AfterViewInit, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { g, removeAccent } from 'src/app/shared/global/filter-tool';
import { filterParameter } from 'src/app/shared/models/List.model';
@Component({
  selector: 'filter-percentage',
  templateUrl: './filter-percentage.component.html',
  styleUrls: ['./filter-percentage.component.scss'],
})
export class FilterPercentageComponent implements OnInit, AfterViewInit {
   @Input() clearfilter: boolean = false;
  @Input() type: string | string[] = '';
  @Input() label: string | string[] = '';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Input() operator: string = '==';
  @Output() outData = new EventEmitter();
  // @Input() rule!: 'lass then' | 'biger then';
  @Input() inParameter!: filterParameter;
  @Output() outParameter: any = new EventEmitter();
  apleyFiler: boolean = false;
  parameter: filterParameter = {
    value: '',
    filterTypeOne: 'lass then',
  };
  ngOnChanges(change: SimpleChanges): void {
    if (change['inData']) {
      this.parameter.value < 0 ? (this.parameter.value = 0) : '';
      this.parameter.value > 100 ? (this.parameter.value = 100) : '';
      this.filterConfige();
      console.log('**************************');
    }
  }

  showTypeFiler: boolean = true;
  ngOnInit(): void {
    // this.rule ? (this.showTypeFiler = false) : (this.showTypeFiler = true);
    this.parameter.value < 0 ? (this.parameter.value = 0) : '';
    this.parameter.value > 100 ? (this.parameter.value = 100) : '';
  }
  inputVal = '';
  setTimeOutId: any = -1;
  ngAfterViewInit(): void {
    this.inParameter ? (this.parameter = this.inParameter) : '';
    this.outData.emit(this.inData);
  }
  clearDataVar: boolean = false;
  clearFiler() {
    this.clearDataVar = true;
  }

  filterConfige() {
    clearTimeout(this.setTimeOutId);
    this.setTimeOutId = setTimeout(() => {
      if (this.apleyFiler) {
        let filterInputValue = this.parameter.value;

        if (!this.clearDataVar && this.path && this.inData) {
          let reusltdata = this.filter(filterInputValue);
          this.outData.emit(reusltdata);
        } else if (this.clearDataVar) this.outData.emit(this.inData);
      } else this.outData.emit(this.inData);
    }, 150);
  }

  filter(filterInputValue: number) {
    return this.inData.filter((i) =>
      this.path instanceof Array
        ? this.path.some((k) => this.find(g(k, i), filterInputValue))
        : this.find(g(this.path, i), filterInputValue)
    );
  }
  find(findIn: number, findBy: number): boolean {
    if (!(findIn && findBy)) return false;
    switch (this.parameter.filterTypeOne) {
      case 'lass then':
        return findIn <= findBy;
      case 'biger then':
        return findIn >= findBy;
      default:
        return false;
    }
  }

  apply: any = () => ((this.apleyFiler = true), this.filterConfige());
  clear: any = () => (
    (this.apleyFiler = false), this.outParameter.emit({}), this.filterConfige()
  );
  sendParameter: any = (a: any = true) =>
    this.outParameter.emit(this.parameter);
}
