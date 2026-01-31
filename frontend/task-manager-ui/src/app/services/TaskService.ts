import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>('http://localhost:5224/api/tasks'); // Corriger le port
  }

  
}
