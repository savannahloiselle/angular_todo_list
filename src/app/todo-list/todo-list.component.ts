import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: string[] = [];

  newItem: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: string) {
    console.log('Added item:', item);
    this.todoList.push(item);
    this.newItem = '';
  }


  removeItem(index: number) {
    this.todoList.splice(index, 1);
  }

 


}


