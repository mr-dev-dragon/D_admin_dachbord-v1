import { Component, Input } from '@angular/core';

@Component({
  selector: 'read-d-zone',
  templateUrl: './read-d-zone.component.html',
  styleUrls: ['./read-d-zone.component.scss'],
})
export class ReadDZoneComponent {
  @Input() data:any
}
