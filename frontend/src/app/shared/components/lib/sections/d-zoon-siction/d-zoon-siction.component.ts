class Cell {
  width: number = 0;
  height: number = 0;
  dir!: 'vertical' | 'horizontal';
  subCells: Cell[] = [];
  cellid: string = '0';
  parentId!: string;
  constructor(
    width: number,
    height: number,
    cellid: string,
    dir: 'vertical' | 'horizontal' = 'horizontal',
    parentId?: string
  ) {
    this.width = width;
    this.height = height;
    this.dir = dir;
    this.cellid = cellid;
    if (parentId) {
      this.parentId = parentId;
    }
  }
  addSubCell(index: number = Infinity, ...cells: Cell[]) {
    this.subCells.splice(index, 0, ...cells);
    this.subCells = this.subCells.slice();
  }
  removeSubCell(id: string) {
    let index = this.subCells.findIndex((cell) => cell.cellid == id);
    if (index > -1) this.subCells.splice(index, 1);
  }
  changeDirection() {
    this.dir = this.dir == 'horizontal' ? 'vertical' : 'horizontal';
    [this.width, this.height] = [this.height, this.width]
    this.subCells.forEach((item) => {
       item.changeDirection();
    })
  }
}




import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Component, ViewChild, ViewChildren } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { UniceId } from 'src/app/shared/global/filter-tool';
import { paramiter } from 'src/app/shared/models/d_zoon.model';
/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'd-zoon-siction',
  templateUrl: './d-zoon-siction.component.html',
  styleUrls: ['./d-zoon-siction.component.scss'],
})
export class DZoonSictionComponent {
  zoneConfigsPopUp = false;
  zoneHistoryPopUp = false;
  zoneElementPopUp = false;

  zoneConfigs(_t124: any, _t125: any, cell: any) {
    this.zoneConfigsPopUp = !this.zoneConfigsPopUp;
  }
  zoneHistory(_t124: any, _t125: any, cell: any) {
    this.zoneHistoryPopUp = !this.zoneHistoryPopUp;
  }
  zoneElement(_t124: any, _t125: any, cell: any) {
    this.zoneElementPopUp = !this.zoneElementPopUp;
  }
  mainZone = new Cell(100, 100, '0');
  zoneMap = new Map<string, Cell>();

  ResizeStartVal: any;
  ResizeEndVal: any;
  refrshSplitter: string = '';
  getUniceId = UniceId();
  parameter: paramiter[] = [
    {
      d_zoonHeight: 0,
      d_zoonWidth: 0,
      d_zoonHeightUnit: 'px',
      d_zoonWidthUnit: 'px',
      d_zoonrowUnit: 'px',
      d_zoonColUnit: 'px',
      d_zoonDiraction: 'horizontal',
    },
  ];

  getRandomColor(): string {
    const letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i: number = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  ngOnInit() {
    this.zoneMap.set('0', this.mainZone);
    let cell0 = new Cell(
      50,
      100,
      this.getUniceId(),
      this.parameter[0].d_zoonDiraction,
      '0'
    );
    let cell1 = new Cell(
      50,
      100,
      this.getUniceId(),
      this.parameter[0].d_zoonDiraction,
      '0'
    );
    this.mainZone.addSubCell(0, cell0, cell1);
    this.zoneMap.set(cell0.cellid, cell0);
    this.zoneMap.set(cell1.cellid, cell1);
  }

  onResizeStart(event: any, parentId: any, dir: any, cells: any) {
    this.ResizeStartVal = event.sizes;
    console.log('ResizeStartVal: ', this.ResizeStartVal);
  }
  onResizeEnd(event: any, parentId: any, dir: any, cells: Cell[]) {
    let aaa: number = 0;
    this.ResizeStartVal.forEach((i: number) => {
      aaa += i;
    });
    let waistedPersonage: number = (100 - aaa) / this.ResizeStartVal.length;
    console.log('waistedPersonage: ', waistedPersonage);

    cells.forEach((cell, i) => {
      if (dir == 'horizontal') {
        cell.width =
          event.sizes[i] + (event.sizes.length - 1) * waistedPersonage;
      } else {
        cell.height =
          event.sizes[i] + (event.sizes.length - 1) * waistedPersonage;
      }
    });

    this.ResizeEndVal = event;
    setTimeout(() => {
      console.warn(this.mainZone);
      this.refrshSplitter = '';
    }, 500);
  }
  removeZoon(id: any, parentId: any) {
    this.refrshSplitter = parentId;
    this.refrshSplitter = parentId;
    let parent = this.zoneMap.get(parentId);
    parent?.removeSubCell(id);
    if (parent?.subCells.length == 1) {
      parent.removeSubCell(parent.subCells[0].cellid);
      parent.dir = parent.dir == 'horizontal' ? 'vertical' : 'horizontal';
    }
    setTimeout(() => {
      console.warn(this.mainZone);
      this.refrshSplitter = '';
    }, 500);
  }
  changeDirection() {
    this.mainZone.changeDirection();

    this.parameter[0].d_zoonDiraction = this.mainZone.dir;
  }
  addZoon(type: string, id: string, parentId: string, cell: Cell) {
    this.refrshSplitter = parentId;
    let parent = this.zoneMap.get(parentId);
    let index = parent?.subCells.findIndex((cell) => cell.cellid == id)!;
    switch (type) {
      case 'main':
        let newDir: any = cell.dir == 'horizontal' ? 'vertical' : 'horizontal';
        let W = cell.dir == 'horizontal' ? 50 : 100;
        let H = cell.dir == 'horizontal' ? 100 : 50;
        let cell0 = new Cell(H, W, this.getUniceId(), cell.dir);
        let cell1 = new Cell(H, W, this.getUniceId(), cell.dir);
        let cell00 = new Cell(W, H, this.getUniceId(), cell.dir);
        let cell01 = new Cell(W, H, this.getUniceId(), cell.dir);
        let cell10 = new Cell(W, H, this.getUniceId(), cell.dir);
        let cell11 = new Cell(W, H, this.getUniceId(), cell.dir);
        cell0.addSubCell(0, cell00, cell01);
        cell1.addSubCell(0, cell10, cell11);
        this.zoneMap.get(id)?.addSubCell(0, cell0, cell1);
        this.zoneMap.get(id)!.dir = newDir;
        this.zoneMap.set(cell0.cellid, cell0);
        this.zoneMap.set(cell1.cellid, cell1);
        this.zoneMap.set(cell00.cellid, cell00);
        this.zoneMap.set(cell01.cellid, cell01);
        this.zoneMap.set(cell10.cellid, cell10);
        this.zoneMap.set(cell11.cellid, cell11);
        break;
      case 'left':
      case 'right':
        if (cell.dir != 'horizontal') {
          cell.dir = 'horizontal';
          let cell0 = new Cell(
            50,
            100,
            this.getUniceId(),
            'horizontal',
            parentId
          );
          let cell1 = new Cell(
            50,
            100,
            this.getUniceId(),
            'horizontal',
            parentId
          );
          this.zoneMap.get(id)?.addSubCell(0, cell0, cell1);
          this.zoneMap.set(cell0.cellid, cell0);
          this.zoneMap.set(cell1.cellid, cell1);
        } else {
          let size = (this.zoneMap.get(id)?.width || 1) / 2;
          //@ts-ignore
          this.zoneMap.get(id).width = size;
          let cell = new Cell(
            size,
            100,
            this.getUniceId(),
            'horizontal',
            parentId
          );
          parent?.addSubCell(index + (type == 'right' ? 1 : 0), cell);
          this.zoneMap.set(cell.cellid, cell);
        }
        break;
      case 'top':
      case 'bottom':
        if (cell.dir != 'vertical') {
          cell.dir = 'vertical';
          let cell0 = new Cell(
            100,
            50,
            this.getUniceId(),
            'vertical',
            parentId
          );
          let cell1 = new Cell(
            100,
            50,
            this.getUniceId(),
            'vertical',
            parentId
          );
          this.zoneMap.get(id)?.addSubCell(0, cell0, cell1);
          this.zoneMap.set(cell0.cellid, cell0);
          this.zoneMap.set(cell1.cellid, cell1);
        } else {
          let size = (this.zoneMap.get(id)?.height || 1) / 2;
          //@ts-ignore
          this.zoneMap.get(id).height = size;
          let cell = new Cell(
            100,
            size,
            this.getUniceId(),
            'vertical',
            parentId
          );
          parent?.addSubCell(index + (type == 'bottom' ? 1 : 0), cell);
          this.zoneMap.set(cell.cellid, cell);
        }
        break;
      default:
        break;
    }
    setTimeout(() => {
      console.warn(this.mainZone);
      this.refrshSplitter = '';
    }, 100);
  }

  public o_config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 21,
    currentPage: 1,
  };

  @ViewChildren('dzoneDropZones') dropZones: any;
  @ViewChild('nenuElementsForDzoneDropZones') menu: any;

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ItemsForAdding: any[] = [
    'image',
    'paragraphe',
    'print',
    'chart',
    'link',
    'card',
    'calendar',
    'map',
    'text',
    'image',
    'paragraphe',
    'print',
    'chart',
    'link',
    'card',
    'calendar',
    'map',
    'text',
    'image',
    'paragraphe',
    'print',
    'chart',
    'link',
    'card',
    'calendar',
    'map',
    'text',
    'image',
    'paragraphe',
    'print',
    'chart',
    'link',
    'card',
    'calendar',
    'map',
    'text',
    'image',
    'paragraphe',
    'print',
    'chart',
    'link',
    'card',
    'calendar',
    'map',
    'text',
    'image',
    'paragraphe',
    'print',
    'chart',
    'link',
    'card',
    'calendar',
    'map',
    'text',
    'image',
    'paragraphe',
    'print',
    'chart',
    'link',
    'card',
    'calendar',
    'map',
    'text',
  ];
  imgUrl: string = '../../../../../../assets/images/google-logs/add-';
  imgExtension: string = 'svg';
  showItemMenu = false;
}
