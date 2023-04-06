import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'item-menu-config',
  templateUrl: './item-menu-config.component.html',
  styleUrls: ['./item-menu-config.component.scss'],
})
export class ItemMenuConfigComponent {
  Quit() {
    this.quit.emit();
  }
  @Input() type: any;
  @Input() inData: any;
  @Output() outData: any;
  @Output() quit: any;
  applyChanges() {
    this.outData.emit(this.inData);
  }
}
