import { Component } from '@angular/core';
import { TaskListComponent } from "./components/task-list/task-list.component";
import { Task } from './types/task';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-tecnico';

  task: Task = {
    title: 'Titulo da tarefa',
    description: 'Descricao da tarefa',
    completed: false,
    createDate: new Date(),
    dueDate: new Date(),
    priority: 'low',
  }

  tasks = [this.task];
}
