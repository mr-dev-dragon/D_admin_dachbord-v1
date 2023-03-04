import { AfterViewInit, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { g, removeAccent } from 'src/app/shared/global/filter-tool';
@Component({
  selector: 'filter-percentage',
  templateUrl: './filter-percentage.component.html',
  styleUrls: ['./filter-percentage.component.scss'],
})
export class FilterPercentageComponent implements OnInit, AfterViewInit {
  @Input() type: string | string[] = '';
  @Input() label: string | string[] = '';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Input() operator: string = '==';
  @Output() outData = new EventEmitter();
  @Input() rule!: 'lass then' | 'biger then';
  range_val: number = 0;
  ngOnChanges(change: SimpleChanges): void {
    if (change['range_val']) {
        this.range_val < 0 ? (this.range_val = 0) : '';
        this.range_val > 100 ? (this.range_val = 100) : '';
    }
  }
  typeFiler: 'lass then' | 'biger then' = 'lass then';
  showTypeFiler: boolean = true;
  ngOnInit(): void {
    this.rule ? (this.showTypeFiler = false) : (this.showTypeFiler = true);
    this.range_val < 0 ? (this.range_val = 0) : '';
    this.range_val > 100 ? (this.range_val = 100) : '';
  }

  inputVal = '';
  setTimeOutId: any = -1;

  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
  }

  clearDataVar: boolean = false;
  clearFiler() {
    this.clearDataVar = true;
  }
  filterBy() {
    clearTimeout(this.setTimeOutId);
    this.setTimeOutId = setTimeout(() => {
      let filterInputValue = this.range_val;
      if (!this.clearDataVar && this.path && this.inData) {
        let reusltdata = this.filter(filterInputValue);
        this.outData.emit(reusltdata);
      } else if (this.clearDataVar) this.outData.emit(this.inData);
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

    switch (this.showTypeFiler ? this.typeFiler : this.rule) {
      case 'lass then':
        return findIn <= findBy;
      case 'biger then':
        return findIn >= findBy;
    }
  }
}

