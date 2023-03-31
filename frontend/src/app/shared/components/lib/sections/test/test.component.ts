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
  @ViewChild('todoList') menu: any;
  @ViewChildren('doneList') dropZones: any;

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower'];
  done2 = ['Check e-mail', 'Walk dog'];
  drop(event: CdkDragDrop<string[]>) {
    console.log('event: ', event);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    else {

      
      if (event.previousContainer == this.menu) {
        event.previousContainer.data = event.previousContainer.data.slice();
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        );
   
    }




    
  }
}
