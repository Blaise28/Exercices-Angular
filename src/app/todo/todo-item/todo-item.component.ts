import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  //on veut recevoir des donnees du parent todo
  @Input() items: string[] = [];

  //on cree un evenement lors du clic sur un item
  @Output() editItem = new EventEmitter<string>();

  editNewItem(value: string | null) {
    if (value) {
      this.editItem.emit(value);
    }
  }
}
