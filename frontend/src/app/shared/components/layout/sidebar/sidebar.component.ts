import { Component, EventEmitter, HostListener, Output, Input, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import {
  SidebarService,
  sidebarItem,
} from 'src/app/shared/services/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ChildActive: boolean = false;

  activeOff(a: any) {
    this.activeDataChicker = null;
    this.ChildActive = true;
  }

  @Input() showSidebar!: boolean;
  @Output() showSidebarupdated = new EventEmitter();
  @Input() darkMode!: boolean;

  showMenu = '';
  showSubMenu = '';
  mobileSize = false;
  sidebarNavItems: sidebarItem[] = [];
  model: any[] = [];
  array = Array;
  showMenu_1: boolean = false;
  showMenu_2: boolean = false;
  showMenu_3: boolean = false;
  showMenu_4: boolean = false;
  showSidebarItomHover: boolean = false;
  dibuger = '';
  x: number = 0;
  y: number = 0;
  activeDataChicker: any = null;

  activeF(a: any) {
    a ? (this.activeDataChicker = a) : (this.activeDataChicker = null);
  }
  showSidebarF() {
    if (!this.showSidebar) {
      this.showSidebar = !this.showSidebar;
      this.showSidebarupdated.emit(this.showSidebar);
    }
  }
  constructor(private sidebarService: SidebarService, public router: Router) {
    this.getSideBar();
    //console.log(this.sidebarNavItems)
  }

  ngOnInit() {
    document.addEventListener('mousemove', (event) => {
      this.x = event.clientX;
      this.y = event.clientY;
    });

    this.handleSidebar();
    this.setActive();
    this.model = [
      //   {
      //   _id: '2',
      //   label: 'Projects',
      //   icon: 'bi bi-journals',
      //   expanded: false,
      //   open: false,
      //   items: [{
      //     _id: '1',
      //     routerLink: ['/projects/edit/62bc4d9e329eac98eeae23a3'],
      //     label: 'edit Projects',
      //     icon: 'bi bi-journals',
      //     active: true,
      //     open: true,
      //   }, {
      //     _id: '2',
      //     routerLink: '/projects',
      //     label: 'Projects',
      //     icon: 'bi bi-journals',
      //     active: true,
      //     open: true,
      //   }]
      // },
      {
        label: 'tables',
        icon: ' pi pi-server',
        items: [
          {
            label: 'table-v1',
            icon: '',
            routerLink: ['/tables/table-v1'],
          },
          {
            label: 'table-v2',
            icon: '',
            routerLink: ['/tables/table-v2'],
          },
          {
            label: 'table-v3',
            icon: '',
            routerLink: ['/tables/table-v3'],
          },
          {
            label: 'table-v4',
            icon: '',
            routerLink: ['/tables/table-v4'],
          },
          {
            label: 'table-v5',
            icon: '',
            routerLink: ['/tables/table-v5'],
          },
        ],
      },
      {
        label: 'cards',
        icon: 'pi pi-id-card ',
        items: [
          {
            label: 'unic',
            icon: '',
            items: [
              {
                label: 'card v1',
                icon: '',
                routerLink: ['/cards/unic/card-v1'],
              },
              {
                label: 'card v2',
                icon: '',
                routerLink: ['/cards/unic/card-v2'],
              },
            ],
          },
          {
            label: 'generique',
            icon: '',
            items: [
              {
                label: 'card v1',
                icon: '',
                routerLink: ['/cards/generique/card-v1'],
              },
              {
                label: 'card v2',
                icon: '',
                routerLink: ['/cards/generique/card-v2'],
              },
            ],
          },
        ],
      },
      {
        label: 'templetes',
        icon: 'pi pi-box',
        items: [
          {
            label: 'templete v1',
            icon: '',
            routerLink: ['/templete/templete-v1'],
          },
          {
            label: 'templete v2',
            icon: '',
            routerLink: ['/templete/templete-v2'],
          },
        ],
      },
      {
        label: 'charts',
        icon: 'pi pi-chart-pie',
        items: [],
        routerLink: ['/charts/chart-v1'],
      },
      {
        label: 'Skeletons',
        icon: ' pi pi-verified',
        items: [
          {
            label: 'cards',
            icon: '',
          },
          {
            label: 'continers',
            icon: '',
          },
          {
            label: 'map',
            icon: '',
          },
          {
            label: 'form',
            icon: '',
          },
          {
            label: 'acorditions',
            icon: '',
          },
          {
            label: 'calinder',
            icon: '',
          },
          {
            label: 'tables',
            icon: '',
          },
          {
            label: 'config',
            icon: '',
          },
          {
            label: 'uploud file',
            icon: '',
          },
          {
            label: 'sliders',
            icon: '',
          },
          {
            label: 'progress ',
            icon: '',
          },
          {
            label: 'steper ',
            icon: '',
          },
        ],
      },
      {
        label: 'calinders',
        icon: 'pi pi-calendar',
        items: [
          {
            label: 'moble size calendar ',
            icon: '',
            routerLink: ['/calinders/mobile-dynamic-calindar'],
          },
          {
            label: 'day calinder',
            icon: '',
            routerLink: ['/calinders/day-calindar'],
          },
          {
            label: ' week calinder',
            icon: '',
            routerLink: ['/calinders/week-calindar'],
          },
          {
            label: 'month calendar',
            icon: '',
            routerLink: ['/calinders/month-calindar'],
          },
          {
            label: 'dynamic calendar',
            icon: '',
            routerLink: ['/calinders/dynamic-calindar'],
          },
          {
            label: ' read only calendar',
            icon: '',
            routerLink: ['/calinders/only-calindar'],
          },
        ],
      },
      {
        label: 'others',
        icon: 'pi pi-truck',
        items: [
          {
            label: 'map',
            icon: '',
            items: [
              {
                label: 'read only map',
                icon: '',
                routerLink: ['/others/map/read-only-map'],
              },
              {
                label: 'live map',
                icon: '',
                routerLink: ['/others/map/live-map'],
              },
              {
                label: 'mobile map',
                icon: '',
                routerLink: ['/others/map/mobile-map'],
              },
            ],
          },
          {
            label: 'acorditions',
            routerLink: ['/others/acorditions'],
          },
          {
            label: 'config',
            routerLink: ['/others/config'],
          },
          {
            label: 'uploud file',
            routerLink: ['/others/uploud-file'],
          },
          {
            label: 'sliders',
            routerLink: ['/others/sliders'],
          },
          {
            label: 'progress ',
            routerLink: ['/others/progress'],
          },
          {
            label: 'stipers ',
            routerLink: ['/others/'],
            items: [
              {
                label: 'header steper ',
                icon: '',
                routerLink: ['/others/stipers/header-stiper'],
              },
              {
                label: 'main steper ',
                icon: '',
                routerLink: ['/others/stipers/main-stiper'],
              },
            ],
          },
        ],
      },
      {
        label: 'form items',
        icon: 'pi pi-box',
        items: [],
      },
    ];
    this.sidebarNavItems = this.model;
  }

  mouseaSideDetailsEnterF: boolean = false;
  sidebarDetailXP: string = '5rem';
  showData: any;
  mouseEnter(a?: any, b?: any) {
    this.showSidebarItomHover = false;
    this.showData = null;

    this.showData = a;
    let h: number = 0;
    let pp: number = 0;
    if (a.items.length) {
      h = h + a.items.length;
    }

    this.y < 100
      ? h > 12
        ? (pp = h * 1)
        : h > 8
        ? (pp = h * 1)
        : h > 6
        ? (pp = h * 1)
        : h > 4
        ? (pp = h * 1)
        : h > 2
        ? (pp = h * 1)
        : ''
      : this.y < 200
      ? h > 12
        ? (pp = h * 5)
        : h > 8
        ? (pp = h * 4)
        : h > 6
        ? (pp = h * 3)
        : h > 4
        ? (pp = h * 2)
        : h > 2
        ? (pp = h * 2)
        : ''
      : this.y < 300
      ? h > 12
        ? (pp = h * 10)
        : h > 8
        ? (pp = h * 8)
        : h > 6
        ? (pp = h * 6)
        : h > 4
        ? (pp = h * 4)
        : h > 2
        ? (pp = h * 3)
        : ''
      : this.y < 400
      ? h > 12
        ? (pp = h * 15)
        : h > 8
        ? (pp = h * 12)
        : h > 6
        ? (pp = h * 9)
        : h > 4
        ? (pp = h * 6)
        : h > 2
        ? (pp = h * 4)
        : ''
      : this.y < 500
      ? h > 12
        ? (pp = h * 20)
        : h > 8
        ? (pp = h * 16)
        : h > 6
        ? (pp = h * 12)
        : h > 4
        ? (pp = h * 8)
        : h > 2
        ? (pp = h * 5)
        : ''
      : this.y < 600
      ? h > 12
        ? (pp = h * 25)
        : h > 8
        ? (pp = h * 20)
        : h > 6
        ? (pp = h * 15)
        : h > 4
        ? (pp = h * 10)
        : h > 2
        ? (pp = h * 6)
        : ''
      : this.y < 700
      ? h > 12
        ? (pp = h * 30)
        : h > 8
        ? (pp = h * 24)
        : h > 6
        ? (pp = h * 18)
        : h > 4
        ? (pp = h * 12)
        : h > 2
        ? (pp = h * 7)
        : ''
      : this.y < 800
      ? h > 12
        ? (pp = h * 35)
        : h > 8
        ? (pp = h * 28)
        : h > 6
        ? (pp = h * 21)
        : h > 4
        ? (pp = h * 14)
        : h > 2
        ? (pp = h * 8)
        : ''
      : this.y < 900
      ? h > 12
        ? (pp = h * 40)
        : h > 8
        ? (pp = h * 32)
        : h > 6
        ? (pp = h * 24)
        : h > 4
        ? (pp = h * 16)
        : h > 2
        ? (pp = h * 9)
        : ''
      : this.y < 1000
      ? h > 12
        ? (pp = h * 45)
        : h > 8
        ? (pp = h * 36)
        : h > 6
        ? (pp = h * 27)
        : h > 4
        ? (pp = h * 18)
        : h > 2
        ? (pp = h * 10)
        : ''
      : this.y < 1100
      ? h > 12
        ? (pp = h * 50)
        : h > 8
        ? (pp = h * 40)
        : h > 6
        ? (pp = h * 30)
        : h > 4
        ? (pp = h * 20)
        : h > 2
        ? (pp = h * 11)
        : ''
      : '';

    this.showSidebarItomHover = true;

    this.sidebarDetailXP = `${this.y - pp}px`;
  }

  mouseLeave(a?: any, b?: any) {}
  mouseaSideEnter() {}
  mouseSideLeave() {
    setTimeout(() => {
      if (this.mouseaSideDetailsEnterF) {
        this.showSidebarItomHover = true;
      } else {
        this.showSidebarItomHover = false;
        this.showData = null;
      }
    }, 100);
  }

  mouseaSideDetailsEnter() {
    this.mouseaSideDetailsEnterF = true;
  }
  mouseSideDetailsLeave() {
    this.mouseaSideDetailsEnterF = false;
    this.mouseSideLeave();
  }

  getSideBar() {
    //   this.sidebarNavItems = this.sidebarService.getMenuItems();
    //
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.handleSidebar();
  }
  handleSidebar() {
    this.mobileSize = window.innerWidth < 1170 ? true : false;
  }
  setActive() {
    let id = '';
    let recF = (items: sidebarItem[]) => {
      let b = false;
      items.map((item: sidebarItem) => {
        if (item.routerLink == this.router.url) b = true;
        if (item.expanded != undefined) item.expanded = recF(item.items || []);
      });
      return b;
    };
    recF(this.sidebarNavItems);
    return id;
  }
  opensidebarAccordion(id: any) {}
  showMenuChildren(a: any, i: any) {
    console.log('777777777777777777', a, '========>', i);
    if ((a = 1)) {
      this.showMenu_1 = !this.showMenu_1;
    } else if ((a = 2)) {
      this.showMenu_2 = !this.showMenu_2;
    } else if ((a = 3)) {
      this.showMenu_3 = !this.showMenu_3;
    } else if ((a = 4)) {
      this.showMenu_4 = !this.showMenu_4;
    }
  }
}
function output() {
  throw new Error('Function not implemented.');
}

