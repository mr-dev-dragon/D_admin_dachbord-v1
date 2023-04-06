import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 's-table-card',
  templateUrl: './s-table-card.component.html',
  styleUrls: ['./s-table-card.component.scss'],
})
export class STableCardComponent implements OnInit {
  @Input() data: any;
  @Input() col: any = [5, 4, 3];
  playCradCols: boolean = false;
  playCradRows: boolean = false;
  item: any;
  percentage: number = 45;
  color: string | undefined;
  onPercentageChange() {
    if (this.percentage > 100) {
      this.percentage = 100;
      this.color = 'red';
    }
    else {
       this.color = undefined;
    }
  }
  constructor() {}
  ngOnInit(): void {
    let calSub: number = 0;
    this.col.map((i: number) => {
      calSub += i;
    });
    calSub === 12 ? (this.playCradCols = true) : (this.playCradCols = false);
  }
}
