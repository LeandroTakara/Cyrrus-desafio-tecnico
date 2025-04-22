import { Component, computed, inject, input } from '@angular/core';
import { SubTask, Task } from '../../types/task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faCheck, faTrash, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';
import { SubtaskItemComponent } from '../subtask-item/subtask-item.component';
import { CreateSubtaskComponent } from '../create-subtask/create-subtask.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list-item',
  imports: [FontAwesomeModule, SubtaskItemComponent, CreateSubtaskComponent, CommonModule],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  taskService = inject(TaskService);
  task = input.required<Task>();

  // icons
  faXmark = faXmark;
  faCheck = faCheck;
  faTrash = faTrash;
  faCalendarXmark = faCalendarXmark;

  priority = computed(() => {
    if (this.task().priority === 'low') return 'Baixa';
    else if (this.task().priority === 'medium') return 'Média';
    else if (this.task().priority === 'high') return 'Alta';
    return 'Não definida';
  })

  isViewMode = true;

  get overDueDate() {
    const dueISODate = this.task().dueDate;
    if (!dueISODate) return null;

    const [year, month, day] = dueISODate.split('-').map(Number);

    const dueDate = new Date(year, month - 1, day);

    return dueDate;
  }

  get isTaskLate() {
    const dueDate = this.overDueDate;

    if (!dueDate) return false;

    const date = new Date();
    date.setHours(0, 0, 0, 0);

    return dueDate < date;
  }

  goToSubtaskCreation() {
    this.isViewMode = false;
  }

  goToViewMode() {
    this.isViewMode = true;
  }

  toggleCompleted() {
    this.taskService.markAsCompleted(this.task());
  }

  removeTask() {
    this.taskService.removeTask(this.task());
  }

  createSubtask(subtask: SubTask) {
    this.taskService.addSubtask(this.task(), subtask);
    this.goToViewMode();
  }
}
