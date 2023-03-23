class Cell {
    width: number = 0;
    height: number = 0;
    dir!: 'vertical' | 'horizontal';
    subCells: Cell[] = [];
    cellid:string='0'
      constructor(
        width: number,
        height: number,
        cellid: string,
        dir: 'vertical' | 'horizontal' = 'horizontal'
      ) {
        this.width = width;
        this.height = height;
        this.dir = dir;
        this.cellid = cellid;
      }
      addSubCell( index: number=Infinity,...cells: Cell[]) {
        this.subCells.splice(
        index,
          0,
          ...cells

        );
        console.log('this.subCells',this.subCells);
        
      }
  removeSubCell(index: number) {
      

    this.subCells.splice(index, 1);
    

    }
}






import { Component } from '@angular/core';
import { UniceId } from 'src/app/shared/global/filter-tool';
import { dZonnData, paramiter } from 'src/app/shared/models/d_zoon.model';
@Component({
  selector: 'd-zoon-siction',
  templateUrl: './d-zoon-siction.component.html',
  styleUrls: ['./d-zoon-siction.component.scss'],
})
export class DZoonSictionComponent {
  getUniceId = UniceId()

  removeZoon(index: any) {}
  addZoon(type: string, id: string, parentId: string, cell: Cell) {
    console.log('dfgjsldfgj', type, id, parentId,this.zoneMap, this.zoneMap.get(id));
    let index = +id.split('-').reverse()[0];

    switch (type) {
      case 'top':
      case 'bottom':
        if (cell.dir != 'horizontal') {
          let cell0 = new Cell(50, 100, this.getUniceId(), 'horizontal');
          let cell1 = new Cell(50, 100, this.getUniceId(), 'horizontal');
          this.zoneMap.get(id)?.addSubCell(0, cell0, cell1);

          this.zoneMap.set(cell0.cellid, cell0);
          this.zoneMap.set(cell1.cellid, cell1);
        } else {
          this.zoneMap
            .get(parentId)
            ?.addSubCell(
              index + (type == 'bottom' ? 1 : 0),
              new Cell(50, 100, this.getUniceId(), 'horizontal')
            );
        }
        break;
      case 'left':
      case 'right':
        if (cell.dir != 'vertical') {
          let cell0 = new Cell(100, 50, this.getUniceId(), 'vertical');
          let cell1 = new Cell(100, 50, this.getUniceId(), 'vertical');
          this.zoneMap.get(id)?.addSubCell(0, cell0, cell1);

          this.zoneMap.set(cell0.cellid, cell0);
          this.zoneMap.set(cell1.cellid, cell1);
        } else {
          this.zoneMap
            .get(parentId)
            ?.addSubCell(
              index + (type == 'right' ? 1 : 0),
              new Cell(50, 100, this.getUniceId(), 'vertical')
            );
        }
        break;
      default:
        break;
    }

    console.log('this.zoneMap',this.zoneMap);
    console.log('this.mainZone',this.mainZone);
  }
  vir: any = ['', '', ''];
  mainZone = new Cell(100, 100, '0');
  zoneMap = new Map<string, Cell>();

  data: dZonnData[] = [
    {
      row: 50,
      cols: [
        [
          {
            row: 100,
            cols: [
              50,
              [
                {
                  cols: [
                    {
                      row: 100,
                      cols: [
                        [
                          {
                            row: 50,
                            cols: 100,
                          },
                          {
                            row: 50,
                            cols: 100,
                          },
                        ],
                        50,
                      ],
                    },
                  ],
                  row: 50,
                },
                {
                  row: 50,
                  cols: 100,
                },
              ],
            ],
          },
        ],
        50,
      ],
    },
  ];
  x: (val: number, unit: string) => string = (val, unit) => `${val}${unit}`;
  // col = [20, 80];
  justifyOptions: any[] = [{ btn: 'inputNumber' }, { btn: 'select' }];
  paramiter: paramiter[] = [
    {
      d_zoonHeight: 0,
      d_zoonWidth: 0,
      d_zoonHeightUnit: 'px',
      d_zoonWidthUnit: 'px',
      d_zoonrowUnit: 'px',
      d_zoonColUnit: 'px',
    },
  ];
  minSizes: number[] = [10, 10];
  row: any[] = [20, [20, [20, 80]]];
  col: any[] = [30, [30, [20, 80]]];
  aplaysomedivs: any = [
    {
      row: [200],
      cols: [20, [20, [20, 80]]],
    },
    {
      row: [110, [220, [310, 320, [410, 420]]]],
      cols: [null, [null, [[78, 34], null, [null, null]]]],
    },
    {
      row: [200],
      cols: [20, [20, [20, 80]]],
    },
    {
      row: [200, [200, 800]],
      cols: [
        [20, [20, [20, 80]]],
        [null, [20, [20, 80]]],
      ],
    },
    {
      row: 1110,
      cols: [
        [20, [20, [20, 80]]],
        [null, [20, [20, 80]]],
      ],
    },
  ];
  a = {
    originalEvent: { isTrusted: true },
    sizes: [44.307196562835664, 55.47798066595059],
  };
  resizwvalue: boolean = false;
  type!: string;
  index!: number | any[];
  ResizeStartVal: any;
  ResizeEndVal: any;
  ngOnInit() {


     this.zoneMap.set('0', this.mainZone);
  }
  onResizeStart(event: any) {
    this.ResizeStartVal = event;
  }
  onResizeEnd(event: any) {
    this.ResizeEndVal = event;
  }
}
