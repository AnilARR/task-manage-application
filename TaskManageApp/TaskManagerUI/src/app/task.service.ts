import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://localhost:44316/api/Task'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/GetTask`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/AddTask`, task);
  }

  
  updateTask(id: number, updatedTask: Task): Observable<Task> {
    const url = `${this.apiUrl}/UpdateTask/${id}`;
    return this.http.put<Task>(url, updatedTask);
  }
  // updateTask(id: number, task: Task): Observable<Task> {
  //   return this.http.put<Task>(`${this.apiUrl}/UpdateTask/${id}`, task);
  // }
  getTaskById(id: number): Observable<Task> {
    const url = `${this.apiUrl}/GetTask/${id}`;
    return this.http.get<Task>(url);
  }
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeleteTask/${id}`);
  }
}
