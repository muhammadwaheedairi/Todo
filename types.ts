
export enum TaskStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed'
}

export enum TaskPriority {
  EXTREME = 'Extreme',
  MODERATE = 'Moderate',
  LOW = 'Low'
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
  image?: string;
}

export interface StatusMetric {
  label: string;
  percentage: number;
  color: string;
}
