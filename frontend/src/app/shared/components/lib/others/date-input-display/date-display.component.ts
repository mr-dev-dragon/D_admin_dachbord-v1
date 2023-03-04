
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.scss'],
})
export class DateDisplayComponent {
  @Input() date!: Date;
  @Input() displayType!: 'week' | 'time' | 'month';
  @Output() updatevalue: any = new EventEmitter();
  @Input()  label: string = '';
  @Input()  min!: Date;
  @Input()  max!: Date;
  dateValue: Date = new Date();
  updateDAteValue(a: any) {
    this.updatevalue.emit(a);
    this.dateValue = a;
  }

  ngOnInit() {
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - this.date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 7) {
      this.displayType = 'week';
    } else if (this.date.getHours() !== 0 || this.date.getMinutes() !== 0) {
      this.displayType = 'time';
    } else {
      this.displayType = 'month';
    }
  }
}
