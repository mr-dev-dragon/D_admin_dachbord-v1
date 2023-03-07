import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter-by-date',
  templateUrl: './filter-date.component.html',
  styleUrls: ['./filter-date.component.scss'],
})
export class FilterDateComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string | string[] = '';
  @Input() inData!: any[];
  @Input() operator: string = '==';
  @Output() outData = new EventEmitter();
  update_value_form_date_input_display: any;
  ngAfterViewInit(): void {
    this.outData.emit(this.inData);
  }
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
  updatevalue(a: any) {
    this.update_value_form_date_input_display = a;
  }
  dateAddSpecificValueBtnF() {
    this.dateAddSpecificValueBtn = !this.dateAddSpecificValueBtn;
  }

  dateAddSpecificValueBtn: boolean = false;
  filterBy(event: any) {
    let filterInputValue = event.target.value;
    if (filterInputValue && this.path && this.inData) {
      let reusltdata = this.filter(filterInputValue, this.operator);
      this.outData.emit(reusltdata);
    } else if (filterInputValue == '') this.outData.emit(this.inData);
  }

  filter(filterInputValue: any, operator: string) {
    let reusltdata: any;
    let path = this.path;

    return reusltdata;
  }
}
