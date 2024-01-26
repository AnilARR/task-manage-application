import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManagerUI';
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  searchTerm: string = '';

  applySearchFilter(): void {
    this.filteredTasks = this.searchTerm
      ? this.tasks.filter(task => task.TaskName.toLowerCase().includes(this.searchTerm.toLowerCase()))
      : this.tasks;
  }
}
