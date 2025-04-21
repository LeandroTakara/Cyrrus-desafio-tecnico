export interface Task {
  title: string;
  description: string;
  completed: boolean;
  createDate: Date;
  dueDate: Date | null;
  priority: Priority;
}

export type Priority = 'not defined' | 'low' | 'medium' | 'high';
