import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">
    <h1>
      Welcome to {{title}}
    </h1>
    </header>
    <section class="main" style="background-color: white;">
      <input class="new-todo" type="text" placeholder="What needs to be done?"
        (keyup.enter)="addTodo($event)">
      <ul class="todo-list">
        <li *ngFor="let todo of todos" [class.completed]="todo.status">
          <div class="view">
            <input class="toggle" type="checkbox" [checked]="todo.status" (click)="toggleStatus(todo)">
            <label>{{todo.name}}</label>
            <button class="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SaarJS Demo';
  todos = [];

  public addTodo(event) {
    this.todos.push({
      name: event.target.value,
      status: false
    });
    event.target.value = '';
    console.log(this.todos);
  }

  public toggleStatus(todo) {
    todo.status = !todo.status;
    console.log(todo.status);
  }
}
