import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';



@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class CustomTemplateExampleComponent implements OnInit, OnChanges {



  @Input() data: any[] = [];
  @Output() outData: any = new EventEmitter();
  @Input() itemsPerPage : number = 10
  @Input() currentPage  : number  = 112

  constructor() {}
  ngOnInit(): void {}

ngOnChanges(): void {
  this.outData.emit(this.data);
}

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: this.itemsPerPage,
    currentPage: this.currentPage
  };
}


