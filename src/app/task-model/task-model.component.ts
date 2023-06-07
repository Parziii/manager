import { Component, Input } from '@angular/core';
import { TaskModelService } from '../service/task-model.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskModelPopupComponent } from '../task-model-popup/task-model-popup.component';

@Component({
  selector: 'app-task-model',
  templateUrl: './task-model.component.html',
  styleUrls: ['./task-model.component.scss']
})
export class TaskModelComponent {
  @Input() model!: TaskModel;
  isDetailsVisible = false;

  toggleDetails(): void {
    this.isDetailsVisible = !this.isDetailsVisible;
  }

  constructor(
    private _taskService: TaskModelService,
    private _dialog: MatDialog
  ){}

  deleteTask(): void {
    this._taskService.deleteTask(this.model.id);
  }

  editTask(): void {
    const dialogRef = this._dialog.open(TaskModelPopupComponent, {
      width: '400px',
      data: { ...this.model }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.model.title = result.title;
        this.model.description = result.description;
        this.model.stateId = parseInt(result.stateId);
        this.model.priority = parseInt(result.priority);

        this._taskService.updateTask(this.model);
      }
    });
  }
}

export interface TaskModel {
  id: number;
  functionId: number;
  title: string;
  description: string;
  user: string;
  priority: number;
  projectId: number;
  stateId: number;
}
