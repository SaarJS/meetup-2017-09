import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header class="header">
    <h1>
      Welcome to {{title}}!
    </h1>
    </header>
    <section class="main" style="background-color: white;">
      <input class="new-todo" type="text" placeholder="What needs to be done?" (keyup.enter)="addTodo($event)">
      <ul class="todo-list">
        <li *ngFor="let todo of todos" [class.completed]="todo.done">
          <div class="view">
            <input class="toggle" type="checkbox" (click)="toggleDone(todo)" [checked]="todo.done">
            <label>{{todo.description}}</label>
            <button class="destroy" (click)="removeTodo(todo)"></button>
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
    this.todos.push({description: event.target.value, done: false});
    event.target.value = '';
  }

  public removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  public toggleDone(todo) {
    todo.done = !todo.done;
  }

}
