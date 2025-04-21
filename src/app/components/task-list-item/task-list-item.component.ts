import { Component, input } from '@angular/core';
import { Task } from '../../types/task';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  task = input.required<Task>();
}
