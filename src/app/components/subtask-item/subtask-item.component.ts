import { Component, inject, input } from '@angular/core';
import { SubTask, Task } from '../../types/task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subtask-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './subtask-item.component.html',
  styleUrl: './subtask-item.component.css'
})
export class SubtaskItemComponent {
  task = input.required<Task>();
  subtask = input.required<SubTask>();
  taskService = inject(TaskService);

  // icons
  faXmark = faXmark;
  faCheck = faCheck;
  faTrash = faTrash;

  toggleCompleted() {
    this.taskService.markAsCompleted(this.subtask());
  }

  removeSubtask() {
    this.taskService.removeSubtask(this.task(), this.subtask());
  }
}
