import { Component, Input } from '@angular/core';

@Component({
  selector: 'confige',
  templateUrl: './confige-ui.component.html',
  styleUrls: ['./confige-ui.component.scss'],
})
export class ConfigeUiComponent {
  @Input() name: string = 'name';

  constructor() {}
  ngDoCheck(): void {}
  lightMode = () => {
    document.documentElement.setAttribute('data-theme', 'light');
  };
  darkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  ngOnInit(): void {}
}
