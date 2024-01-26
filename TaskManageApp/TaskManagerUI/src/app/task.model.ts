export interface Task {
    Id: number; // Make sure Id is required
    TaskName: string;
    Description: string;
    DueDate: Date;
    IsCompleted: boolean;
  }
  