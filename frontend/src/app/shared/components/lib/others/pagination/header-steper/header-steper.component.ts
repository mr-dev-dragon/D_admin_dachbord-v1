import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-header-steper',
  templateUrl: './header-steper.component.html',
  styleUrls: ['./header-steper.component.scss'],
})
export class HeaderSteperComponent {
  @Input() data: any = {};
  @Output() onclick: any = new EventEmitter();
  @Input() title: string = '';
  @Input() sutitle: string = '';
  @Input() autoForm: boolean = true;

  activeIndex: any;
  datat: any;
  onItemclick(a: any, i: any) {
    if (a) {
      this.data.map((o: any, index: any) => {
        if (a.active == true) o.active = false;
        else if (index == i) o.active = true;
      });
      console.log(this.data);

    }
  }

  ngOnInit(): void {
    // if (this.autoForm) {
    //   let valid = true;
    //   this.data.map((o: any, i: any) => {
    //     i == 0 ? o.show = true : '';
    //     if (valid) {
    //       valid = o.show
    //     } else {
    //       o.show = false;
    //     }
    //   })
    // }
  }
}
