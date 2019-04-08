import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() group: 'todo'|'done';
  @Input() actionId: String;
  @Input() defaultValue: String;

  @Output() changeGroup: EventEmitter<any> = new EventEmitter();
  @Output() removeItem: EventEmitter<any> = new EventEmitter();

  currentValue: String;

  constructor() { }

  ngOnInit() {
    this.currentValue = this.defaultValue;
  }

  handleRemove = () => {
    this.removeItem.emit({ actionId: this.actionId, group: this.group });
  }

  handleInput = (event) => {
    this.currentValue = event.target.value;
  }

  handleChangeGroup = () => {
    this.changeGroup.emit({ actionId: this.actionId, group: this.group, value: this.currentValue });
  }

}
