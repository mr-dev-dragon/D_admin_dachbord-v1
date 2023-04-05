import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'drag-drop-element-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss'],
})
export class ItemMenuComponent {
  @Input() imgUrl: string = '';
  @Input() imgExtension: string = '';
  @Input() ItemsForAdding: any[] = [];
  @Input() showItemMenu: boolean = false;
  @Input() dropZones: any;
  o_config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 21,
    currentPage: 1,
  };
  @ViewChild('nenuElementsForDzoneDropZones') menu: any;
  noReturnPredicate() {
    return false;
  }
  drop(event: CdkDragDrop<any>, id?: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray( 
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (event.previousContainer == this.menu) {
        event.previousContainer.data = event.previousContainer.data.slice();
      }
    } else {
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
  dropPlaceholder(name: string) {
    let a101 = '<';
    let tagName = '';
    let a201 = '>';
    let oneTagName = '';
    let name2 = '';
    let space = ' ';
    let a102 = '<';
    let a21 = '/';
    let a202 = '>';


    switch (name) {
      case 'heading':
        tagName = 'h1';
        name2 = name;
        break;
      case 'image':
        oneTagName = 'img';
        a201 = '';
        name2 = "src='url.png'";
        a102 = '';
        break;
      case 'paragraphe':
        tagName = 'p';
        name2 = 'name';
        break;
      case 'link':
        tagName = 'a';
        name2 = 'href="http://"';
        break;
      case 'card':
        tagName = 'card';
        name2 = 'name';
        break;
      case 'calendar':
        tagName = 'input';
        name2 = "type='date'";
        break;
      case 'youtube':
        tagName = 'iframe';
        name2 = 'youtube';
        break;
      case 'iframe':
        tagName = 'iframe';
        name2 = 'website';
        break;
      default:
        break;
    }
    return (
      a101 +
      tagName +
      oneTagName +
      a201 +
      space +
      name2 +
      a102 +
      a21 +
      tagName +
      a202
    );
  }
}
