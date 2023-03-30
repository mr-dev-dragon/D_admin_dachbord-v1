import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, ViewChild, ViewChildren } from '@angular/core';
import {

  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  @ViewChildren('todoList') dropZones: any;
  @ViewChild('doneList') menu: any;
  ngAfterViewInit() {
    console.log('menus: ', this.menu);
    console.log('dropZones: ', this.dropZones);
  }

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
}
