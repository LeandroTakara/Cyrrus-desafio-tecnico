export interface Task {
  title: string;
  description: string;
  completed: boolean;
  createDate: Date;
  dueDate: Date;
  priority: Priority;
}

export type Priority = 'low' | 'medium' | 'high';
