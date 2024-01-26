import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  newTask: Task = { Id: 0, TaskName: '', Description: '', DueDate: new Date(), IsCompleted: false };

  constructor(private taskService: TaskService,private router: Router) {}

  addTask(taskForm: NgForm): void {
    if (taskForm.valid) {
      this.taskService.addTask(this.newTask).subscribe((addedTask:any) => {
        console.log('Task added successfully:', addedTask);
        alert('Task Added Successfully');
        //this.successModal.open();
        // Redirect to the task list or any other appropriate page after updating
        this.router.navigateByUrl("/task-list");
        //taskForm.resetForm();
      });
    }
  }
}
