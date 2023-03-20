import { NavigationEnd } from '@angular/router';
import { AcorditionsComponent } from 'src/app/components/others-example/acorditions/acorditions.component';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  Input,
  ContentChild,
  TemplateRef,
  Output,
  EventEmitter,
  Renderer2,
  QueryList,
  ContentChildren,
  ViewChildren,
  ɵɵqueryRefresh,
  SimpleChange,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Table } from 'jspdf-autotable';
import { PaginationInstance } from 'ngx-pagination';
import { MenuItem } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BehaviorSubject, Subject } from 'rxjs';
import {
  FlterType,
  ListCaptionConfig,
  ListHeader,
  OnDeleteEvent,
} from 'src/app/shared/models/List.model';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { UndoDeleteDialogService } from 'src/app/shared/services/undo-delete-dialog.service';
@Component({
  selector: 'd-table',
  templateUrl: './d-table.component.html',
  styleUrls: ['./d-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DTableComponent implements OnInit {
  headerfilterValue: string=''

  filtersCunte: number = 0;
  gitFilerParameterNameId: (a: any[]) => string = (a) => a.join('');
  filterParameter: Map<any, any> = new Map();
  var: any = [];
  selectedAllRowVal: any;
  ture: any;

  outParameter(event: Event, id: string) {
    this.filterParameter.set(id, event);
    this.var.push({ id: id, data: event });
  }
  log = console.log;
  filterMap = new Map();
  linkFiltersWithData() {
    this.filtersCunte = 0;
    this.filterMap = new Map();
    let per: string = 'default';
    this.filterMap.set(per, this.data);
    this._selectedColumns.map((o: any, i: any) => {
      console.log(o, i);
      if (o.filter) {
        this.filterMap.set(i, this.data);
        this.filterMap.set(`${i}--per`, per);
        per = i;
        this.filtersCunte++;
      }
    });
    this.filterMap.set('outData', per);
  }

  clearfunction(table?: any) {
    this.headerfilterValue=''
    this._selectedColumns = this.columns;
    this.clearfilterActive = false;
    this.filterParameter.clear();
  }
  onDataChange(id: any, data: any) {
    this.filterParameter.size && (this.clearfilterActive = true);
    this.filterMap.set(id, data);
    if (id == this.filtersCunte) {
      this.selectedRow.clear();
      this.selectedAllRowVal = false;
    }
  }
  dataLenth: number = 0;
  selectedRow = new Set();
  allRowAreSelectedRow: boolean = false;
  selectedRowfunction(valid: any, data: any) {
    valid.checked ? this.selectedRow.add(data) : this.selectedRow.delete(data);
    if (
      this.selectedRow.size ==
      this.filterMap.get(this.filterMap.get('outData')).length
    )
      this.selectedAllRowVal = true;
    else this.selectedAllRowVal = false;
  }
  selectedAllRowfunction(valid: any) {
    this.filterMap.get(this.filterMap.get('outData')).forEach((o: any) => {
      this.selectedRow[valid.checked ? 'add' : 'delete'](o);
    });
  }
  // outFilter(event: Event, id: string) {
  //   this.filterConcataytions.set(id, event);
  // }
  // #region  call dom Elemants
  @ViewChild('dt') dataTable!: Table;
  @ViewChildren('i') exRowIcon!: QueryList<ElementRef>;
  @ContentChild('expandedRow', { static: false })
  expandedRow!: TemplateRef<any>;
  @ViewChild('tableBody', { static: false })
  @ContentChildren('[slot=card]')
  cardNgContentElements!: QueryList<any>;
  @ContentChildren('[slot=details]') detailsNgContentElements!: QueryList<any>;
  @ContentChildren('[slot=unic]') unicNgContentElements!: QueryList<any>;
  // #endregion
  tableBody!: any;
  @Output() onEditClick: EventEmitter<any> = new EventEmitter();
  @Output() onDetailClick: EventEmitter<any> = new EventEmitter();
  @Output() onCloneClick: EventEmitter<any> = new EventEmitter();
  @Output() onAddClick: EventEmitter<any> = new EventEmitter();
  @Output() onRefreshClick: EventEmitter<boolean> = new EventEmitter();
  @Output() onDelete: EventEmitter<OnDeleteEvent> = new EventEmitter();
  @Input() tiblecontinerDiv: boolean = true;
  @Input() tibleFooter: boolean = true;
  @Input() data: any = [];
  @Input() tableWidth: string = '97%';
  @Input() tableBgC: string = '#2658b506 ';
  @Input() tAbleborderRadius: string = '0.4rem';
  @Input() tibleTitale: string = 'tible Titale';
  @Input() cols: ListHeader[] = [];
  @Input() selectedCols: any = [];
  @Input() rows: any = 10;
  @Input() grid: boolean = true;
  @Input() captionConfig!: ListCaptionConfig;
  @Input() disableFilterInDataType: string[] | string = '';
  @Input() disableSortInDataType: string[] | string = '';
  @Input() disableFilterWithHeader: string[] | string = '';
  @Input() disableSortWithHeader: string[] | string = '';
  @Input() table: boolean = false;
  ngOnChanges(changes: SimpleChange) {
    this.linkFiltersWithData();
  }
  SortDontWorkWithHeaders: string[] | any[] = [];
  filterDontWorkWithHeaders: string[] | any[] = [];
  dateTypeSortDontWorkWith: string[] | any[] = [
    'img',
    'file',
    'chips',
    'boolean',
    'template',
    'multiSelect',
  ];
  dateTypefilterDontWorkWith: string[] | any[] = [
    'img',
    'file',
    'template',
    'multiSelect',
  ];
  // #region  ng-content vars
  cardFilled: boolean = false;
  detailsFilled: boolean = false;
  unicFilled: boolean = false;
  // #endregion
  zoomedImag: boolean = false;
  zoomedImagsrc: string = '';
  zoomedImagindex: number = 0;
  zoomedImagModalsrc: any = '';
  zoomedImagModalindex: number = 0;
  show_file_data: boolean = false;
  dommyitems: any = [];
  products!: any[];
  selectedProduct: any;
  sortpTooltip: string = '';
  showColumn: string = 'up';
  columns: any[] = [];
  selectedItems: any = [];
  speedDialItems: any[] = [];
  selected: any;
  clearfilterActive: boolean = false;
  firstTime: any = true;
  currentWidth: number = window.innerWidth;
  showshowCurrentPageReport: boolean = true;
  currentPageReportTemplate: string = '{first} to {last}';
  accorditoinTableRowBtnIcon: boolean | null = null;
  accorditoinTableRowBtnIconF(a: any, i: HTMLElement) {
    i.setAttribute(
      'data-accorditionRow',
      !JSON.parse(i.getAttribute('data-accorditionRow') || '') + ''
    );
    // this.accorditoinTableRowBtnIcon = !this.accorditoinTableRowBtnIcon;
  }
  initSpeedDialItems: MenuItem[] = [
    {
      id: 'csv',
      icon: 'pi pi-file',
      tooltipOptions: {
        tooltipLabel: 'export CSV',
        tooltipPosition: 'top',
      },
      // command: () => {
      //   this.dataTable.exportCSV();
      // },
    },
    {
      id: 'xls',
      icon: 'pi pi-file-excel',
      tooltipOptions: {
        tooltipLabel: 'export XLS',
        tooltipPosition: 'top',
      },
      // command: () => {
      //   this.exportExcel();
      // },
    },
    {
      id: 'pdf',
      icon: 'pi pi-file-pdf',
      tooltipOptions: {
        tooltipLabel: 'export PDF',
        tooltipPosition: 'top',
      },
      // command: () => {
      //   this.exportPdf();
      // },
    },
    {
      id: 'selection',
      icon: 'pi pi-filter',
      tooltipOptions: {
        tooltipLabel: 'export selection only',
        tooltipPosition: 'top',
      },
      // command: () => {
      //   this.dataTable.exportCSV({ selectionOnly: true });
      // },
    },
  ];
  globalFilterFields: string[] = [];
  demiRows = 0;
  _selectedColumns: any[] = [];
  exportColumns: any[] = [];
  changes: any = null;
  regex = /\{\{\s*data\.length\s*\}\}/g;
  initialCaptionConfig: ListCaptionConfig = {
    globalFilter: true,
    csv: false,
    pdf: false,
    xls: false,
    selection: false,
    displayedColumns: false,
    clearTable: true,
    refreshData: false,
    addButton: false,
    expanded: null,
    sort: false,
    rowNamber: false,
    selectionType: 'single',
    summary: {
      enabled: true,
      message: 'In total there are {{data.length}} elements.',
    },
    buttons: [],
    actions: {
      clone: false,
      delete: false,
      edit: false,
      detail: false,
    },
  };
  constructor(
    private undoDialogService: UndoDeleteDialogService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public translateService: TranslateService,
    public helpers: HelpersService,
    private renderer: Renderer2
  ) {
    if (this.config.data?.headers) {
      this.captionConfig = {
        ...this.initialCaptionConfig,
        ...this.config.data.captionConfig,
      };
      this.cols = this.config.data.headers || [];
      this.data = this.config.data.data;
      this.selectedItems = this.data.filter((item: any) => item.selected);
      if (
        this.captionConfig?.selectionType == 'single' &&
        this.selectedItems.length
      )
        this.selectedItems = this.selectedItems[0];
      this.translateService
        .get(this.config.header || '')
        .subscribe((translation) => {
          this.config.header = translation;
        });
    }
  }
  playHolder: any[] = [];
  ngOnInit(): void {
    this.disableFilterWithHeader instanceof Array
      ? this.disableFilterWithHeader.map((d) =>
          this.filterDontWorkWithHeaders.push(d)
        )
      : this.filterDontWorkWithHeaders.push(this.disableFilterWithHeader);
    this.disableSortWithHeader instanceof Array
      ? this.disableSortWithHeader.map((d) =>
          this.SortDontWorkWithHeaders.push(d)
        )
      : this.SortDontWorkWithHeaders.push(this.disableSortWithHeader);
    this.disableFilterInDataType instanceof Array
      ? this.disableFilterInDataType.map((d) =>
          this.dateTypeSortDontWorkWith.push(d)
        )
      : this.dateTypeSortDontWorkWith.push(this.disableFilterInDataType);
    this.disableSortInDataType instanceof Array
      ? this.disableSortInDataType.map((d) =>
          this.dateTypefilterDontWorkWith.push(d)
        )
      : this.dateTypefilterDontWorkWith.push(this.disableSortInDataType);
    //  this.productService
    //    .getProductsSmall()
    //    .then((products) => (this.products = products));
    this.dommyitems = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        separator: true,
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
    this.widthSubject.next(window.innerWidth);
    window.addEventListener('resize', () => {
      this.widthSubject.next(window.innerWidth);
    });
    this.demiRows = Math.floor(this.rows / 2);
    this.columns = [];
    this.cols.map((col: any) => {
      this.columns.push({ ...col });
    });
    this._selectedColumns = [];
    this.columns.map((col: any) => {
      this._selectedColumns.push({ ...col });
    });
    this.exportColumns = this.columns?.map((col: any) => ({
      title: col.header,
      dataKey: col.field,
    }));
    this.linkFiltersWithData();
  }
  tableBodyTotalHeight: any;
  tableBodyTotalWidth: any;
  ngAfterContentInit() {
    this.cardFilled = !!this.cardNgContentElements;
    this.detailsFilled = !!this.detailsNgContentElements;
    this.unicFilled = !!this.unicNgContentElements;
  }
  playholder() {
    let Datalength: number = this.filterMap.get(
      this.filterMap.get('outData')
    ).length;
    let shownrows: number = this.o_config.itemsPerPage;
    shownrows > Datalength
      ? (this.playHolder = new Array(shownrows - Datalength).fill(''))
      : '';
    return this.playHolder;
  }
  ngAfterViewInit() {}
  imageClikEvent(i: any, n: number, event: any, k?: boolean) {
    if (!k) {
      this.zoomedImag = true;
      this.zoomedImagsrc = i;
      this.zoomedImagindex = n;

      console.log(
        '%cMyProject%cline:389%cevent.clientX)',
        'color:#fff;background:#ee6f57;padding:3px;border-radius:2px',

        'color:#fff;background:#1f3c88;padding:3px;border-radius:2px',
        'color:#fff;background:rgb(252, 157, 154);padding:3px;border-radius:2px',
        event.clientX
      );
    } else {
      this.zoomedImag = false;
      event.clientX > 1906
        ? (this.left = event.clientX - 800)
        : event.clientX > 2400
        ? (this.left = event.clientX - 750)
        : event.clientX > 2350
        ? (this.left = event.clientX - 700)
        : event.clientX > 2300
        ? (this.left = event.clientX - 650)
        : event.clientX > 2250
        ? (this.left = event.clientX - 600)
        : event.clientX > 2200
        ? (this.left = event.clientX - 550)
        : event.clientX > 2150
        ? (this.left = event.clientX - 500)
        : event.clientX > 2100
        ? (this.left = event.clientX - 450)
        : event.clientX > 2050
        ? (this.left = event.clientX - 400)
        : event.clientX > 2000
        ? (this.left = event.clientX - 350)
        : event.clientX > 1950
        ? (this.left = event.clientX - 300)
        : event.clientX > 1900
        ? (this.left = event.clientX - 550)
        : event.clientX > 1800
        ? (this.left = event.clientX - 550)
        : (this.left = event.clientX - 200);
      this.top = event.clientY - 300;

      n == 0
        ? (this.top = event.clientY - 200)
        : n == 1
        ? (this.top = event.clientY - 200)
        : n > 1 && n < this.o_config.itemsPerPage - 1
        ? (this.top = event.clientY - 300)
        : (this.top = event.clientY - 370);

      this.zoomedImagsrc = '';
      this.zoomedImagindex = -1;
      this.show_file_data = true;
      this.zoomedImagModalsrc = i;
      this.zoomedImagModalindex = n;
    }
  }
  imageClikEvent_Close() {
    this.show_file_data = false;
    this.zoomedImagModalsrc = '';
    this.zoomedImagModalindex = -1;
  }
  imagemouseleaveEvent() {
    this.zoomedImag = false;
    this.zoomedImagsrc = '';
    this.zoomedImagindex = -1;
  }
  showothersbotens: boolean = false;
  showothersbotensf() {
    this.showothersbotens = !this.showothersbotens;
  }
  caprion_col_1!: number;
  caprion_col_2!: number;
  width = 0;
  private widthSubject = new BehaviorSubject<number>(0);
  @Input() get selectedColumns(): any[] {
    console.table(this._selectedColumns);
    return this._selectedColumns;
  }
  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.columns.filter((col: any) => {
      return val.includes(col);
    });
  }
  @Input() items: string[] = [];
  sortedItems: string[] = [];
  sort(direction: 'asc' | 'desc') {
    this.sortedItems = this.items.sort((a, b) => {
      if (direction === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
  }
  finalData: any[] = [];
  outDataf(a: any) {
    this.finalData = a;
  }
  outData: any[] = [];
  outDatav2: any[] = [];
  tableDatalength: number = 0;
  outDataFunction(fData: any, type: string, index: number, field: string) {
    // this.outFilter(
    //   JSON.parse(JSON.stringify(fData)),
    //   this.gitFilerParameterNameId(index, type)
    // );
    this.outDatav2 = JSON.parse(JSON.stringify(fData));
    this.outData = fData;
    this.tableDatalength = fData.length;
  }
  public o_config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1,
  };
  ngDoCheck() {
    if (this.changes) {
      this.columns = [...this.cols];
      this.columns = [...this._selectedColumns] = this.columns.map(
        (col: any) => {
          let val = { ...col };
          if (typeof val.header == 'object') {
            if (typeof val.header.data == 'object' && val.header.data.length) {
              val.header =
                val.header.data.find(
                  (d: any) => d.language == localStorage.getItem('lang')
                )?.value || val.header.data[0].value;
            } else val.header = val.header.data.value;
          }
          return val;
        }
      );
      if (this.changes.captionConfig) {
        const mergeCaptionConfigs = (
          newCaptionConfig: any,
          initConfig: any
        ) => {
          Object.keys(newCaptionConfig).forEach((key) => {
            if (initConfig[key] !== undefined) {
              if (
                initConfig[key] &&
                typeof initConfig[key] == 'object' &&
                !(initConfig[key] instanceof Array)
              ) {
                initConfig[key] = mergeCaptionConfigs(
                  newCaptionConfig[key],
                  initConfig[key]
                );
              } else {
                initConfig[key] = newCaptionConfig[key];
              }
            }
          });
          return initConfig;
        };
        this.captionConfig = mergeCaptionConfigs(
          this.captionConfig,
          this.helpers.newObject(this.initialCaptionConfig)
        );
      } else if (!this.captionConfig) {
        this.captionConfig = this.initialCaptionConfig;
      }
      this.speedDialItems = this.initSpeedDialItems.filter((item: any) => {
        // @ts-ignore
        return this.captionConfig[item.id];
      });
      this.globalFilterFields = this.cols.map((col) => col.field);
      this.changes = null;
    }
    // if (this.dataTable && this.dataTable) {
    //   this.selectedCols.splice(
    //     0,
    //     this.selectedCols.length,
    //     ...this.dataTable._columns
    //   );
    // }
  }
  showColumnDtaills(index: number) {
    this.showColumn == 'up'
      ? (this.showColumn = 'down')
      : (this.showColumn = 'up');
  }
  refreshActive: boolean = false;
  setTimeOutId: any = -1;
  refresh() {
    this.onRefreshClick.emit(true);
    this.refreshActive = true;
    clearTimeout(this.setTimeOutId);
    this.setTimeOutId = setTimeout(() => {
      this.refreshActive = false;
    }, 2050);
  }
  onAdd() {
    this.onAddClick.emit();
  }
  onEdit(index: number) {
    this.onEditClick.emit(this.data[index]);
  }
  onDetail(index: number) {
    this.onDetailClick.emit(this.data[index]);
  }
  onClone(index: number) {
    this.onCloneClick.emit(this.data[index]);
  }
  onSelectedColumnsChange(event: any) {
    this.linkFiltersWithData();
    this._selectedColumns = event.value;
  }
  left!: number;
  top!: number;
  changeState() {
    this.onDelete.emit({
      id: this.selectedItems.length
        ? this.selectedItems.map((item: any) => item._id)
        : [this.selectedItems?._id],
      etat: 'etatObjet.archive',
    });
    this.selectedItems = [];
  }
  showUndoDialog() {
    this.undoDialogService.showDialog((event) => {
      if (event.result == 'timeout') {
        this.changeState();
      }
    }, 2);
  }
  firstSortEvent() {}
  saveSelectedItems() {
    this.ref.close(this.selectedItems);
  }
  onRowExpand(itemSelected: any) {
    console.log('itemSelected.data', itemSelected.data);
    this.firstTime = false;
    this.selected = itemSelected.data._id;
    console.log('🚀 ~ ~  this.selected', this.selected);
  }
  maxwidth(val: number) {
    if (this.currentWidth < val) return true;
    else return false;
  }
  minwidth(val: number) {
    if (this.currentWidth > val) return true;
    else return false;
  }
  checkIfImage(url: string): boolean {
    const regex = /\.(jpg|png|jpeg|gif|svg|bmp|tiff|webp|raw|psd|ai)$/i;
    return regex.test(url);
  }
  show_tbody_main_td_hover: any;
  show_tbody_main_td_hover_at: any;
  show_tbody_main_td_hover_f(i: any, b?: any) {
    this.show_tbody_main_td_hover = i;
    this.show_tbody_main_td_hover_at = i + b;
  }
  showExRowStyles: boolean = false;
  showExRow(a?: number) {}
  exportCSV(a?: number) {}
  exportPdf(a?: number) {}
  exportExcel(a?: number) {}
  pageRowsOptions: any[] = [10, 20, 30, 40, 50];
  pageRowsSelected: any;
}
