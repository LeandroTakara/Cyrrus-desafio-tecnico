export interface Task {
  title: string;
  description: string;
  completed: boolean;
  createDate: Date;
  dueDate: Date | null;
  priority: Priority;
  subtasks: SubTask[];
}

export interface SubTask {
  title: string;
  completed: boolean;
  createDate: Date;
}

export type Priority = 'not defined' | 'low' | 'medium' | 'high';
