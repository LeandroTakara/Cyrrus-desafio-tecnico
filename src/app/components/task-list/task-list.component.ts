import { Component, computed, inject } from '@angular/core';
import { TaskListItemComponent } from '../task-list-item/task-list-item.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task';
import { FilterMode, FilterTask } from '../../types/filter';
import { FilterTaskComponent } from "../filter-task/filter-task.component";

@Component({
  selector: 'app-task-list',
  imports: [TaskListItemComponent, FontAwesomeModule, CreateTaskComponent, FilterTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskService = inject(TaskService)
  filterTask: FilterTask = {
    filterMode: 'all',
    searchText: '',
  }
  isViewMode = true;

  // icons
  faPlus = faPlus

  get filteredTasks() {
    return this.taskService.filterTasks(this.filterTask);
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

  changeFilterMode(filterMode: FilterMode) {
    this.filterTask.filterMode = filterMode;
  }

  searchTask(text: string) {
    this.filterTask.searchText = text;
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
