import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskModel } from '../task-model/task-model.component';

@Component({
  selector: 'app-task-model-popup',
  templateUrl: './task-model-popup.component.html',
  styleUrls: ['./task-model-popup.component.scss']
})
export class TaskModelPopupComponent {
  editedModel: TaskModel = {
    id: 0,
    functionId: 0,
    title: '',
    description: '',
    user: '',
    priority: 1,
    projectId: 0,
    stateId: 0
  };

  constructor(
    public dialogRef: MatDialogRef<TaskModelPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskModel
  ) {
    this.editedModel = { ...data };
  }

  saveChanges(): void {
    this.dialogRef.close(this.editedModel);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
