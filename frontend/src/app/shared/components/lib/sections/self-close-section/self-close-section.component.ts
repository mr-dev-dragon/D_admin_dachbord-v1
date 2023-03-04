import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-self-close-section',
  templateUrl: './self-close-section.component.html',
  styleUrls: ['./self-close-section.component.scss']
})
export class SelfCloseSectionComponent {

  @Input() data: any[] = ['', '', '', ''];
  @Input() height: string = '500px';
  
}
