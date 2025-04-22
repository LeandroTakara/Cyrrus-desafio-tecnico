import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListInfoComponent } from "./components/task-list-info/task-list-info.component";

@Component({
  selector: 'app-root',
  imports: [TaskListComponent, TaskListInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-tecnico';
}
