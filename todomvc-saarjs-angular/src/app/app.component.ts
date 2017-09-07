import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">
    <h1>
      Welcome to Title!
    </h1>
    </header>
    <section class="main" style="background-color: white;">
      <input class="new-todo" type="text" placeholder="What needs to be done?">
      <ul class="todo-list">
        <li>
          <div class="view">
            <input class="toggle" type="checkbox">
            <label>Todo 1</label>
            <button class="destroy"></button>
          </div>
        </li>
        <li>
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>Todo 2</label>
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
}
