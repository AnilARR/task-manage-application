import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModalComponent } from '../message-modal/message-modal.component';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  @ViewChild(MessageModalComponent) successModal!: MessageModalComponent; // Add this line

  taskId!: number;
  task!: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    //private successModal: MessageModalComponent 
  ) { }

  ngOnInit(): void {
   // Get the task ID from the route parameters
   const idParam = this.route.snapshot.paramMap.get('id');
   this.taskId = idParam ? +idParam : 0; // Provide a default value (0) or handle it accordingly
  // Retrieve the task details from the route data
    const taskParam = this.route.snapshot.paramMap.get('task');
    this.task = taskParam ? (JSON.parse(taskParam) as Task) : {} as Task;

  }

  updateTask() {
    // Assuming you have a method in TaskUpdateService to update the task
    this.taskService.updateTask(this.taskId, this.task).subscribe(
      (updatedTask:any) => {
        console.log('Task updated successfully:', updatedTask);
        alert('Task Updated Successfully');
        //this.successModal.open();
        // Redirect to the task list or any other appropriate page after updating
        this.router.navigateByUrl("/task-list");
      },
      (error:any) => {
        console.error('Error updating task:', error);
        // Handle error as needed
      }
    );
  }
  popup(){
    alert('Task Updated Successfully');
    this.router.navigateByUrl("/task-list");
  }
}
