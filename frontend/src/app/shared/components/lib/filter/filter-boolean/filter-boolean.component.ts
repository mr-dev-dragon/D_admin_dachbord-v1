import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

import { g, removeAccent } from 'src/app/shared/global/filter-tool';
import { filterParameter } from 'src/app/shared/models/List.model';
@Component({
  selector: 'filter-by-boolean',
  templateUrl: './filter-boolean.component.html',
  styleUrls: ['./filter-boolean.component.scss'],
})
export class FilterBooleanComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any[]> = new EventEmitter();
  @Input() inParameter!: filterParameter;
  @Output() outParameter: any = new EventEmitter();
  apleyFiler: boolean = false;
  parameter: filterParameter = {
    value: 0,
    filterTypeOne: 'lass then',
  };
  ngAfterViewInit(): void {
    this.inParameter ? (this.parameter = this.inParameter) : '';
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change['inData']) this.filterConfige();
  }
  filterConfige() {
    if (this.path != '' && this.inData) {
      if (this.apleyFiler) {
        let reusltdata = this.filter(
          this.inData,
          {
            path: this.path,
            filterbythis: this.parameter.value,
          },
          'boolean'
        );
        this.outData.emit(reusltdata);
      } else this.outData.emit(this.inData);
    }
  }

  filter(data: any[], filter: { path: any; filterbythis: any }, type?: any) {
    let reusltdata = data;
    if (filter.filterbythis instanceof Array) {
      if (filter.path instanceof Array) {
        filter?.path.map((i) => {
          reusltdata = this.filtererry(
            reusltdata,
            filter.filterbythis,
            i,
            type
          );
        });
      } else {
        reusltdata = this.filtererry(
          reusltdata,
          filter.filterbythis,
          filter?.path,
          type
        );
      }
    } else {
      if (filter.path instanceof Array) {
        let result = new Set();
        filter.path.map((v) => {
          result = new Set([
            ...result,
            ...reusltdata.filter((i: any) => {
              return removeAccent(g(v, i)).includes(filter.filterbythis);
            }),
          ]);
        });

        reusltdata = [...result];
      } else {
        reusltdata = reusltdata.filter((i: any) => {
          return g(filter?.path, i) == filter.filterbythis;
        });
      }
    }

    return reusltdata;
  }
  filtererry(reusltdata: any[], filterbythis: any, i: any, type: any): any {}

  apply: any = () => ((this.apleyFiler = true), this.filterConfige());
  clear: any = () => (
    (this.apleyFiler = false), this.outParameter.emit({}), this.filterConfige()
  );
  sendParameter: any = () => this.outParameter.emit(this.parameter);
}
 