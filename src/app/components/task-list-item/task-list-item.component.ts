import { Component, computed, inject, input } from '@angular/core';
import { Task } from '../../types/task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list-item',
  imports: [FontAwesomeModule],
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

  priority = computed(() => {
    if (this.task().priority === 'low') return 'Baixa';
    else if (this.task().priority === 'medium') return 'Média';
    else if (this.task().priority === 'high') return 'Alta';
    return 'Não definida';
  })

  toggleCompleted() {
    this.task().completed = !this.task().completed;
  }

  removeTask() {
    this.taskService.removeTask(this.task());
  }
}
