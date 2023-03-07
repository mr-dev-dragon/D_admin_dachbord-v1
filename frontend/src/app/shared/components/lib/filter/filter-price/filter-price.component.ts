

import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter-by-price',
  template: `
    <div>
      <label>Price:</label>
      <input type="number" [(ngModel)]="price" (ngModelChange)="filterData()" />
      <label>Currency:</label>
      <select [(ngModel)]="currency" (ngModelChange)="filterData()">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  `,
})
export class FilterPriceComponent {
  @Input()   data!: any[];
  @Input()   path!: string;
  @Output()  filteredData:EventEmitter<any> = new EventEmitter<any[]>();
  price!: number;
  currency: string = 'USD';

  filterData() {
    let filteredData = this.data.filter((item) => {
      const price = item[this.path][this.currency];
      return price && price >= this.price;
    });
    this.filteredData.emit(filteredData);
  }
}
