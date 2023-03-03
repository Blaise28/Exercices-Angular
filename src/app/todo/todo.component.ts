import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  // //le parent(todo) envoie les donnees vers l'enfant (todoItem)
  // @Output() newItem = new EventEmitter<String>();
  // addItem(newItem: string) {
  //   //on dit a notre emitteur qu'on a emit en changement en lui donnant la valeur
  //   this.newItem.emit(newItem);
  // }
  currentItems: string[] = [
    "Faire du sport",
    "Voir le match des bucks",
    "Acheter les snekears"
  ];

  input_value: string = '';

  inputValue(v: string) {
    this.input_value = v;
  }

  @HostListener('click', ['$event'])
  addItem(item: string, $event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.currentItems.push(item);
  }

}
