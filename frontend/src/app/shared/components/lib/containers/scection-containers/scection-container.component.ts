import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-scection-containers',
  templateUrl: './scection-container.component.html',
  styleUrls: ['../style.contianer.scss'],
})
export class ScectionContainersComponent {
  @Input() col: number[] = [];
  constructor() {}
  ngOnInit(): void {}
}
