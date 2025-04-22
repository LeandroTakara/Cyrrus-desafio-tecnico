import { Injectable } from '@angular/core';
import { SubTask, Task } from '../types/task';
import { FilterMode, FilterTask } from '../types/filter';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private filterTask: FilterTask = {
    filterMode: 'all',
    searchText: '',
  }

  constructor() {
    this.tasks = this.#loadTasks();
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.#saveTasks();
  }

  removeTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.#saveTasks();
  }

  addSubtask(task: Task, subtask: SubTask) {
    task.subtasks.push(subtask);
    this.#saveTasks();
  }

  removeSubtask(task: Task, subtask: SubTask) {
    task.subtasks.splice(task.subtasks.indexOf(subtask), 1);
    this.#saveTasks();
  }

  changeFilterMode(filterMode: FilterMode) {
    this.filterTask.filterMode = filterMode;
  }

  changeSearchText(searchText: string) {
    this.filterTask.searchText = searchText;
  }

  getFilteredTasks() {
    let tasks: Task[] = [];

    if (this.filterTask.filterMode === 'completed') tasks = this.tasks.filter(task => task.completed);
    else if (this.filterTask.filterMode === 'not-completed') tasks = this.tasks.filter(task => !task.completed);
    else tasks = this.tasks

    if (this.filterTask.searchText) {
      tasks = tasks.filter(task => task.title.toLowerCase().includes(this.filterTask.searchText.toLowerCase()));
    }

    return tasks;
  }

  #saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  #loadTasks() {
    const tasksSaved = localStorage.getItem('tasks');
    return tasksSaved ? JSON.parse(tasksSaved) : [];
  }
}
