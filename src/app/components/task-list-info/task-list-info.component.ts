import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FilterTaskComponent } from "../filter-task/filter-task.component";

@Component({
  selector: 'app-task-list-info',
  imports: [FilterTaskComponent],
  templateUrl: './task-list-info.component.html',
  styleUrl: './task-list-info.component.css'
})
export class TaskListInfoComponent {
  taskService = inject(TaskService)

  get countFilteredTasksCompleted() {
    return this.taskService.getFilteredTasks().filter(task => task.completed).length;
  }

  get countFilteredTasksNotCompleted() {
    return this.taskService.getFilteredTasks().filter(task => !task.completed).length;
  }

  get countFilteredTasks() {
    return this.taskService.getFilteredTasks().length;
  }
  
  get countTotalTasksCompleted() {
    return this.taskService.getTasks().filter(task => task.completed).length;
  }

  get countTotalTasksNotCompleted() {
    return this.taskService.getTasks().filter(task => !task.completed).length;
  }

  get countTotalTasks() {
    return this.taskService.getTasks().length;
  }
}
