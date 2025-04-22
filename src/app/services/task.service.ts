import { Injectable } from '@angular/core';
import { SubTask, Task } from '../types/task';

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
}
