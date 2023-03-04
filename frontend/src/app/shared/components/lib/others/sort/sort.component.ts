


import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'


@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent implements OnInit {
  @Input() data: any = [];
  @Input() path: string = '';
  @Input() sortByName: boolean = true;
  @Input() sortByDate: boolean = true;
  @Input() showSortByNameLable: boolean = false;
  @Input() showSortByDateLable: boolean = false;


  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.sort_by_name_value = 'sort';
  }

  sort_by_name_value: string = 'sort';
  sort_by_date_value: string = 'sort';

  sortByNameFunction(): any {
    if (this.sort_by_name_value == 'sort-up') {
      this.data.sort((a: any, b: any) =>
        a[this.path].toLowerCase() > b[this.path].toLowerCase() ? 1 : -1
      );
      this.sort_by_name_value = 'sort-down';
    } else if (this.sort_by_name_value == 'sort-down') {
      this.data.sort((a: any, b: any) =>
        a[this.path].toLowerCase() < b[this.path].toLowerCase() ? 1 : -1
      );
      this.sort_by_name_value = 'sort-up';
    } else if (this.sort_by_name_value == 'sort') {
      this.sort_by_name_value = 'sort-down';
    }
  }

  sortByDateFunction() {
    if (this.sort_by_date_value == 'sort-up') {
      this.data.sort((a: any, b: any) =>
        a[this.path] > b[this.path] ? 1 : -1
      );
      this.sort_by_date_value = 'sort-down';
    } else if (this.sort_by_date_value == 'sort-down') {
      this.data.sort((a: any, b: any) =>
        a[this.path] < b[this.path] ? 1 : -1
      );
      this.sort_by_date_value = 'sort-up';
    } else if (this.sort_by_date_value == 'sort') {
      this.sort_by_date_value = 'sort-down';
    }
  }
}
