import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  searchTerm: string = '';


  constructor(private taskService: TaskService,private router:Router) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks:any) => {
      this.tasks = tasks;
      
    });
  }

  deleteTask(id: number): void {
    if(confirm('Are you sure?')){
      this.taskService.deleteTask(id).subscribe(() => {
        this.getTasks();            
      });
    }
    
  }
  // navigateToUpdateTask(taskId: number) {
  //   this.router.navigate(['/tasks/update', taskId]);
  // }
  
  navigateToUpdateTask(taskId: number) {
    // Fetch the task details by ID using the TaskService
    this.taskService.getTaskById(taskId).subscribe(task => {
      // Navigate to the update task component with the task details
      this.router.navigate(['/tasks/update', taskId, { task: JSON.stringify(task) }]);
    });
  }

  
}
