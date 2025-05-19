import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) userId!: string
  @Input({required: true}) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddingNewTask() {
    this.isAddingTask = true;
  }

  onCloseAddingNewTask() {
    this.isAddingTask = false;
  }
}
