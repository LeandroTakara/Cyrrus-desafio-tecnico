import { Component, output } from '@angular/core';
import { FilterMode } from '../../types/filter';

@Component({
  selector: 'app-filter-task',
  imports: [],
  templateUrl: './filter-task.component.html',
  styleUrl: './filter-task.component.css'
})
export class FilterTaskComponent {
  filterChange = output<FilterMode>();
  search = output<string>();

  changeFilterMode(mode: FilterMode) {
    this.filterChange.emit(mode);
  }

  searchTask(input: Event) {
    this.search.emit((input.target as HTMLInputElement).value);
  }
}
