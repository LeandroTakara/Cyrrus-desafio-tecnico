import { Component, computed, input } from '@angular/core';
import { Task } from '../../types/task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-list-item',
  imports: [FontAwesomeModule],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent {
  task = input.required<Task>();

  // icons
  faXmark = faXmark;
  faCheck = faCheck;
  faTrash = faTrash;

  priority = computed(() => {
    if (this.task().priority === 'low') return 'baixa';
    if (this.task().priority === 'medium') return 'média';
    return 'alta';
  })

  toggleCompleted() {
    this.task().completed = !this.task().completed;
  }
}
