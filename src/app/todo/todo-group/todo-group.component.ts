import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-group',
  templateUrl: './todo-group.component.html',
  styleUrls: ['./todo-group.component.scss']
})
export class TodoGroupComponent implements OnInit {

  @Input() groupTitle: String;

  constructor() { }

  ngOnInit() {
  }

}
