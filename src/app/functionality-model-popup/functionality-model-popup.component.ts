import { Component, Inject, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FunctionalityModel } from '../functionality-model/functionality-model.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-functionality-model-popup',
  templateUrl: './functionality-model-popup.component.html',
  styleUrls: ['./functionality-model-popup.component.scss']
})
export class FunctionalityModelPopupComponent {
  editedModel: FunctionalityModel = {
    id: 0,
    title: '',
    description: '',
    user: '',
    priority: 1,
    projectId: 0,
    stateId: 0
  };

  constructor(
    public dialogRef: MatDialogRef<FunctionalityModelPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FunctionalityModel
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
