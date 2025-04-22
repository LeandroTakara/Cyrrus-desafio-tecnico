import { Injectable } from '@angular/core';
import { SubTask, Task } from '../types/task';
import { FilterTask } from '../types/filter';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  createSubtask(task: Task, subtask: SubTask) {
    task.subtasks.push(subtask);
  }

  removeSubtask(task: Task, subtask: SubTask) {
    task.subtasks.splice(task.subtasks.indexOf(subtask), 1);
  }

  filterTasks(filterTask: FilterTask): Task[] {
    let tasks = [];

    if (filterTask.filterMode === 'completed') tasks = this.tasks.filter(task => task.completed);
    else if (filterTask.filterMode === 'not-completed') tasks = this.tasks.filter(task => !task.completed);
    else tasks = this.tasks

    if (filterTask.searchText) {
      tasks = tasks.filter(task => task.title.toLowerCase().includes(filterTask.searchText.toLowerCase()));
    }

    return tasks;
  }
}
