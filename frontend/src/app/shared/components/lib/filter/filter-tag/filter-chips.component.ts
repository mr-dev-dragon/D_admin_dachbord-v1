import { Component, EventEmitter, Input, Output } from '@angular/core';
import { filterParameter } from 'src/app/shared/models/List.model';

@Component({
  selector: 'filter-by-tag',
  templateUrl: './filter-chips.component.html',
  styleUrls: ['./filter-chips.component.scss'],
})
export class FilterChipsComponent {
  @Input() type: string | string[] = 'text';
  @Input() label: string | string[] = 'text';
  @Input() path: string = '';
  @Input() inData!: any[];
  @Output() outData: EventEmitter<any> = new EventEmitter();
  @Input() optionLabel!: string[] | any[];
  @Input() DafultValue: number[] = [20, 80];
  @Input() inParameter!: filterParameter;
  @Output() outParameter: any = new EventEmitter();
  parameter!: filterParameter;
  apleyFiler: boolean = false;
  @Input() rule!: 'lass then' | 'biger then';

  ngOnInit(): void {
    this.inParameter
      ? (this.parameter = this.inParameter)
      : (this.parameter = {
          value: ['jjj'],
        });
  }

  filter(selectedTags: string[]) {
    let filteredData = this.inData.filter((item) => {
      let match = false;
      selectedTags.forEach((tag) => {
        if (item[this.path].includes(tag)) {
          match = true;
        }
      });
      return match;
    });
    this.apleyFiler
      ? this.outData.emit(filteredData)
      : this.outData.emit(this.inData);
  }

  apply() {
    this.apleyFiler = true;
  }

  clear() {
    this.apleyFiler = false;
  }
  sendParameter: any = () => this.outParameter.emit(this.parameter);
}
