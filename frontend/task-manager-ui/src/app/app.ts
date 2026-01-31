import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './services/TaskService';
import { Task } from './models/Task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  title = signal('task-manager-ui');
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
      console.log('Constructor App called');

  }

  ngOnInit() {
    console.log('App component initialized');
    console.error('ERROR TEST');
    console.warn('WARN TEST');
    console.log('LOG TEST');

    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        console.log('Tasks loaded:', this.tasks);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des tâches:', error);
      }
    });
  }
}
