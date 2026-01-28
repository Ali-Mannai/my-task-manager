import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task {

constructor(private http: HttpClient) {}

  getTasks() {
  return this.http.get<string[]>('http://localhost:5000/api/tasks');
}

  
}
