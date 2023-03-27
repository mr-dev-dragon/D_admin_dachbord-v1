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
}
import { Component } from '@angular/core';
import { UniceId } from 'src/app/shared/global/filter-tool';
import { paramiter } from 'src/app/shared/models/d_zoon.model';
@Component({
  selector: 'd-zoon-siction',
  templateUrl: './d-zoon-siction.component.html',
  styleUrls: ['./d-zoon-siction.component.scss'],
})
export class DZoonSictionComponent {
  mainZone = new Cell(100, 100, '0');
  zoneMap = new Map<string, Cell>();
  ResizeStartVal: any;
  ResizeEndVal: any;
  refrshSplitter: string = '';
  getUniceId = UniceId();
  paramiter: paramiter[]  = [
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
  ngOnInit() {
    this.zoneMap.set('0', this.mainZone);
    let cell0 = new Cell(100, 50, this.getUniceId(),this.paramiter[0].d_zoonDiraction, '0');
    let cell1 = new Cell(100, 50, this.getUniceId(),this.paramiter[0].d_zoonDiraction, '0');

    this.mainZone.addSubCell(0, cell0, cell1);
    this.zoneMap.set(cell0.cellid, cell0);
    this.zoneMap.set(cell1.cellid, cell1);
  }
  onResizeStart(event: any) {
    this.ResizeStartVal = event;
  }
  onResizeEnd(event: any) {
    this.ResizeEndVal = event;
  }
  removeZoon(id: any, parentId: any) {
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
  changeDiraction() {
    this.mainZone.dir = this.mainZone.dir == 'horizontal' ? 'vertical' : 'horizontal';
    this.paramiter[0].d_zoonDiraction = (this.paramiter[0].d_zoonDiraction == 'horizontal' ? 'vertical' : 'horizontal');


  }
  addZoon(type: string, id: string, parentId: string, cell: Cell) {
    this.refrshSplitter = parentId;
    let parent = this.zoneMap.get(parentId);
    let index = parent?.subCells.findIndex((cell) => cell.cellid == id)!;
    switch (type) {
      case 'main':
        let newDir: any = cell.dir == 'horizontal' ? 'vertical' : 'horizontal';
        let cell0 =  new Cell(50, 100, this.getUniceId(), newDir);
        let cell1 =  new Cell(50, 100, this.getUniceId(), newDir);
        let cell00 = new Cell(100, 50, this.getUniceId(), cell.dir);
        let cell01 = new Cell(100, 50, this.getUniceId(), cell.dir);
        let cell10 = new Cell(100, 50, this.getUniceId(), cell.dir);
        let cell11 = new Cell(100, 50, this.getUniceId(), cell.dir);
        cell0.addSubCell(0, cell00, cell01);
        cell1.addSubCell(0, cell10, cell11);
        this.zoneMap.get(id)?.addSubCell(0, cell0, cell1);
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
          let cell0 = new Cell( 50, 100, this.getUniceId(), 'horizontal', parentId);
          let cell1 = new Cell(  50,  100,  this.getUniceId(),  'horizontal',  parentId );
          this.zoneMap.get(id)?.addSubCell(0, cell0, cell1);
          this.zoneMap.set(cell0.cellid, cell0);
          this.zoneMap.set(cell1.cellid, cell1);
        } else {
          let cell = new Cell(50,100,this.getUniceId(),'horizontal',parentId);
          parent?.addSubCell(index + (type == 'right' ? 1 : 0), cell);
          this.zoneMap.set(cell.cellid, cell);
        }
        break;
      case 'top':
      case 'bottom':
        if (cell.dir != 'vertical') {
          cell.dir = 'vertical';
          let cell0 = new Cell(100,50,this.getUniceId(),'vertical',parentId);
          let cell1 = new Cell(  100,  50,  this.getUniceId(),  'vertical',  parentId);
          this.zoneMap.get(id)?.addSubCell(0, cell0, cell1);
          this.zoneMap.set(cell0.cellid, cell0);
          this.zoneMap.set(cell1.cellid, cell1);
        } else {
          let cell = new Cell(50, 100, this.getUniceId(), 'vertical', parentId);
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
    }, 500);
  }
}
