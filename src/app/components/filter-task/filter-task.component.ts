import { Component, inject } from '@angular/core';
import { FilterMode } from '../../types/filter';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-filter-task',
  imports: [],
  templateUrl: './filter-task.component.html',
  styleUrl: './filter-task.component.css'
})
export class FilterTaskComponent {
  taskService = inject(TaskService);

  changeFilterMode(mode: FilterMode) {
    this.taskService.changeFilterMode(mode);
  }

  changeSearchTask(input: Event) {
    this.taskService.changeSearchText((input.target as HTMLInputElement).value);
  }
}
