import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  { path: ' ', component: TaskListComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'tasks/update/:id', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
