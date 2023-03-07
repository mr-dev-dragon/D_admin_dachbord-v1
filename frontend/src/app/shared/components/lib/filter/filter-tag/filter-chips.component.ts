import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() outData:EventEmitter<any> = new EventEmitter();
  @Input() optionLabel!: string[] | any[];
  inDataClone: any[] = [];
  valuesChips: any;

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
    this.outData.emit(filteredData);
  }
}
