import { Component, computed, inject } from '@angular/core';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task';
import { FilterMode } from '../../types/filter';

@Component({
  selector: 'app-task-list',
  imports: [TaskListItemComponent, FontAwesomeModule, CreateTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskService = inject(TaskService)
  isViewMode = true;

  // icons
  faPlus = faPlus

  get filteredTasks() {
    return this.taskService.getFilteredTasks();
  }

  get tasksCompleted() {
    let count = 0;
    this.taskService.getTasks().forEach(task => {
      if (task.completed) count++;
    });
    return count;
  }

  get tasksNotCompleted() {
    let count = 0;
    this.taskService.getTasks().forEach(task => {
      if (!task.completed) count++;
    });
    return count;
  }

  get totalTasks() {
    return this.taskService.getTasks().length;
  }

  goToTaskCreation() {
    this.isViewMode = false;
  }

  goToViewMode() {
    this.isViewMode = true;
  }

  createTask(task: Task) {
    this.taskService.addTask(task)
    this.goToViewMode()
  }
}
