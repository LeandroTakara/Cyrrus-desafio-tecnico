export interface FilterTask {
  filterMode: 'all' | 'completed' | 'not-completed';
  searchText: string;
}

export type FilterMode = 'all' | 'completed' | 'not-completed';
