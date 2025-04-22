import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FilterTaskComponent } from "./components/filter-task/filter-task.component";

@Component({
  selector: 'app-root',
  imports: [TaskListComponent, FilterTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-tecnico';
}
