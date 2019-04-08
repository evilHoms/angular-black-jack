import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoItems: Array<any> = [];
  doneItems: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  handleAddBtnClick = () => {
    this.todoItems.push({ actionId: String(Date.now()) + String(Math.random() * 10000), value: '' });
  }

  handleChangeGroup = event => {
    if (event.group === 'todo') {
      const index = this.todoItems.findIndex(item => (item.actionId === event.actionId));
      this.todoItems.splice(index, 1);
      this.doneItems.push({ actionId: event.actionId, value: event.value });
    } else {
      const index = this.doneItems.findIndex(item => (item.actionId === event.actionId));
      this.doneItems.splice(index, 1);
      this.todoItems.push({ actionId: event.actionId, value: event.value });
    }
  }

  handleRemove = event => {
    if (event.group === 'todo') {
      const index = this.todoItems.findIndex(item => (item.actionId === event.actionId));
      this.todoItems.splice(index, 1);
    } else {
      const index = this.doneItems.findIndex(item => (item.actionId === event.actionId));
      this.doneItems.splice(index, 1);
    }
  }

}
