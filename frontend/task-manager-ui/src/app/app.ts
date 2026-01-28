import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './services/task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager-ui');

constructor(private taskService: Task) {}

  tasks: string[] = [];

ngOnInit() {
  this.taskService.getTasks().subscribe(data => this.tasks = data);
}

}
