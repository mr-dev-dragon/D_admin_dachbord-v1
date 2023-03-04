
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
@Component({
  selector: 'd-filter',
  templateUrl: './d-filter.component.html',
  styleUrls: ['./d-filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DFilterComponent implements OnInit, AfterViewInit {
  // #region  inputes and outputs properties
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Output() outData = new EventEmitter();
  @Input() optionLabel!: string[] | any[];
  inDataClone: any[] = [];
  // #endregion

  // #region  call inputes from the DOM ELEMENTS
      @ViewChild('search') searchDomElement!: any;
      @ViewChild('text') textDomElement!: any;
      @ViewChild('numeric') numericDomElement!: any;
      @ViewChild('percentage') percentageDomElement!: any;
      @ViewChild('boolean') booleanDomElement!: any;
      @ViewChild('chips') chipsDomElement!: any;
      @ViewChild('date') dateDomElement!: any;
      @ViewChild('range') rangeDomElement!: any;
      @ViewChild('phone') phoneDomElement!: any;
      @ViewChild('address') addressDomElement!: any;
      @ViewChild('price') priceDomElement!: any;
      @ViewChild('multiSelect') multiSelectDomElement!: any;
      @ViewChild('template') templateDomElement!: any;

  // #endregion

  // #region  resulte frilters variables zoon
  filteredDataFrom_textHeader: any[] = [];
  filteredDataFrom_text: any[] = [];
  filteredDataFrom_multiSelect: any[] = [];
  filteredDataFrom_boolean: any[] = [];
  filteredDataFrom_chips: any[] = [];
  filteredDataFrom_date: any[] = [];
  filteredDataFrom_numeric: any[] = [];
  filteredDataFrom_template: any[] = [];
  filteredDataFrom_percentage: any[] = [];
  filteredDataFrom_range: any[] = [];
  filteredDataFrom_phone: any[] = [];
  filteredDataFrom_address: any[] = [];
  filteredDataFrom_price: any[] = [];
  // #endregion

  constructor() {}
  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
  }
  ngOnInit(): void {
    this.inDataClone = JSON.parse(JSON.stringify(this.inData));
    this.dataFunctions();
  }

  // #region  text
  // #endregion
  // #region  numeric

  // #endregion
  // #region  percentage

  // #endregion
  // #region  numeric

  // #endregion
  // #region  boolean
  checkboxValue: boolean = false;

  // #endregion
  // #region  chips

  // #endregion
  // #region  date
  reusltdata: any = [];
  update_value_form_date_input_display: Date = new Date();
  dateAddSpecificValueBtn: boolean = false;
  reusltdataClone: any;
  valuesChips: string[] = [];
  separatorExp: RegExp = /,| /;
  valuesDate!: Date;
  valueNumeric!: number;
  minDate!: Date;
  maxDate!: Date;
  invalidDates!: Array<Date>;
  randomDates: Date[] = [
    new Date('22-07-2023'),
    new Date('2023-07-01T20:00:00Z'),
    new Date('2023-02-14T00:00:00'),
    new Date('2023-01-01T00:00:00'),
    new Date('2022-05-10'),
    new Date('2021-11-15'),
    new Date('2023-03-01'),
    new Date('2022-06-22'),
    new Date('2022-09-09'),
    new Date('2022-07-04'),
    new Date('2022-12-25'),
    new Date('2023-08-08'),
    new Date('2021-04-15'),
    new Date('2023-01-01'),
    new Date('2023-05-31T12:30:00Z'),
    new Date('2022-02-14T08:15:00Z'),
    new Date('2022-11-30T18:00:00Z'),
    new Date('2021-09-22T10:45:00Z'),
    new Date('2023-07-01T20:00:00Z'),
    new Date('2022-03-15T09:30:00Z'),
    new Date('2021-10-10T15:45:00Z'),
    new Date('2023-06-05T19:30:00Z'),
    new Date('2022-08-20T13:15:00Z'),
    new Date('2022-04-01T11:00:00Z'),
    new Date('2023/04/20'),
    new Date('07/22/2022'),
    new Date('05/30/2022'),
    new Date('14-02-2023'),
    new Date('03/12/2023'),
    new Date('23/11/2021'),
    new Date('2022/11/09'),
    new Date('2023-05-15'),
    new Date('2022-12-03'),
    new Date('15/07/2023'),
    new Date('08/09/2021'),
  ];
  dateAddSpecificValueBtnF() {
    this.dateAddSpecificValueBtn = !this.dateAddSpecificValueBtn;
  }

  dataFunctions() {
    this.allmultiSelectData = this.inData;
    this.rangeValues = [this.rangeValuesLeft, this.rangeValuesRight];
    this.range_val < 0 ? (this.range_val = 0) : '';
    this.range_val > 100 ? (this.range_val = 100) : '';

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
    this.reusltdataClone = JSON.parse(JSON.stringify(this.inData));
  }
  // #endregion
  // #region  range

  range_val: number = 0;
  rangeValuesRight: number = 80;
  rangeValuesLeft: number = 20;
  rangeValues: number[] = [];
  event: any;
  handleChange(e: any) {
    this.event = e;

    this.rangeValuesLeft = e.values[0];
    this.rangeValuesRight = e.values[1];
  }
  rangeF() {
    this.rangeValues = [this.rangeValuesLeft, this.rangeValuesRight];
  }

  // #endregion
  // #region address

  // #endregion
  // #region  price

  // #endregion
  // #region  multi Selecte
  allmultiSelectData: any[] = [];
  _SelectedData: any[] = [];
  checkIfImage(url: string): boolean {
    const regex = /\.(jpg|png|jpeg|gif|svg|bmp|tiff|webp|raw|psd|ai)$/i;
    return regex.test(url);
  }
  // #endregion
  // #region  template
  // #endregion
  // #region call filter by tiype zoon

  filterBySearch() {

    let filterInputValue = this.searchDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'text'
      );
      this.outData.emit(this.inData);
          console.log('SSSSSSSSSSSSSSSs ' , this.inData.length);

    } else if (filterInputValue == '') {

      this.outData.emit(this.inDataClone);
    }
  }
  filterByText() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'text'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByBoolean() {
    if (this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: this.checkboxValue,
        },
        'boolean'
      );

      this.outData.emit(this.inData);
    }
  }
  filterByChips() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'Chips'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByDate() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'date'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByNumeric(i?: any) {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'numeric'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByPercentage() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'percentage'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByRange() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'range'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByPhone() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'phone'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByAddress() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'address'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByPrice() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'price'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  filterByMultiSelect() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'multi select'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  updatevalue(a: any) {
    this.update_value_form_date_input_display = a;
  }
  filterByTemplate() {
    let filterInputValue = this.textDomElement?.nativeElement.value || '';
    if (filterInputValue != '' && this.path != '' && this.inData) {
      this.inData = this.filter(
        this.inData,
        {
          path: this.path,
          filterbythis: filterInputValue,
        },
        'template'
      );
      // this.outData.emit(this.inData);
    } else if (filterInputValue == '') {
      this.outData.emit(this.reusltdataClone);
    }
  }
  // #endregion

  // #region  filter functionality
  filter(data: any[], filter: { path: any; filterbythis: any }, type?: any) {
    this.reusltdata = data;

    switch (type) {
      case 'text-header':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'text':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
                return this.removeAccent(this.g(filter?.path, i))
                  .toLowerCase()
                  .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'numeric':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'percentage':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'boolean':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i)).includes(
                    filter.filterbythis
                  );
                }),
              ]);
            });

            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.g(filter?.path, i) == filter.filterbythis;
            });
          }
        }

        break;
      case 'chips':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'date':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'range':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'phone':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'address':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'price':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'multiSelect':
        if (filter.filterbythis instanceof Array) {
              if (filter.path instanceof Array) {
                filter?.path.map((i) => {
                  this.reusltdata = this.filtererry(
                    this.reusltdata,
                    filter.filterbythis,
                    i,
                    type
                  );
                });
              } else {
                this.reusltdata = this.filtererry(
                  this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      case 'template':
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }
        break;
      default:
        if (filter.filterbythis instanceof Array) {
          if (filter.path instanceof Array) {
            filter?.path.map((i) => {
              this.reusltdata = this.filtererry(
                this.reusltdata,
                filter.filterbythis,
                i,
                type
              );
            });
          } else {
            this.reusltdata = this.filtererry(
              this.reusltdata,
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
                ...this.reusltdata.filter((i: any) => {
                  return this.removeAccent(this.g(v, i))
                    .toLowerCase()
                    .includes(filter.filterbythis.toLowerCase());
                }),
              ]);
            });
            this.reusltdata = [...result];
          } else {
            this.reusltdata = this.reusltdata.filter((i: any) => {
              return this.removeAccent(this.g(filter?.path, i))
                .toLowerCase()
                .includes(filter.filterbythis.toLowerCase());
            });
          }
        }

        break;
    }
    return this.reusltdata;
  }

  filtererry(data: any[], CheckboxList: any, label: any, type: string) {
    let result = CheckboxList.filter((el: any) => el.nativeElement.checked);
    result = result.length
      ? result
          .reduce((previousValue: any, currentValue: any) => {
            return [
              ...previousValue,
              ...data.filter((val) => {
                return this.removeAccent(this.g(label, val))
                  .toLowerCase()
                  .includes(
                    this.removeAccent(
                      currentValue.nativeElement.value.toLowerCase()
                    )
                  );
              }),
            ];
          }, [])
          .reduce((previousValue: any, currentValue: any) => {
            if (!previousValue.find((val: any) => val.id == currentValue.id))
              previousValue.push(currentValue);
            return previousValue;
          }, [])
      : data;
    return result;
  }

  // #endregion
  // #region  tools
  g(path: string, data: any): any {
    let [current, ...child] = path.split('.');
    if (child?.length) {
      return this.g(child.join('.'), data[current]);
    }
    if (current) {
      return data[current];
    }
    return data;
  }

  removeAccent(s: any) {
    var r = s.toLowerCase();
    r = r.replace(new RegExp('-', 'g'), ' ');
    r = r.replace(new RegExp('_', 'g'), ' ');
    r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
    r = r.replace(new RegExp('æ', 'g'), 'ae');
    r = r.replace(new RegExp('ç', 'g'), 'c');
    r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
    r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
    r = r.replace(new RegExp('ñ', 'g'), 'n');
    r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
    r = r.replace(new RegExp('œ', 'g'), 'oe');
    r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
    r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
    r = r.replace(new RegExp('ç', 'g'), 'c');
    return r;
  }
  // #endregion


}
