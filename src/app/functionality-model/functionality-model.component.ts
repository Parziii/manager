import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FunctionalityModelService } from '../service/functionality-model.service';
import { FunctionalityModelPopupComponent } from '../functionality-model-popup/functionality-model-popup.component';

@Component({
  selector: 'app-functionality-model',
  templateUrl: './functionality-model.component.html',
  styleUrls: ['./functionality-model.component.scss']
})
export class FunctionalityModelComponent {
  @Input() model!: FunctionalityModel;
  isDetailsVisible = false;

  toggleDetails(): void {
    this.isDetailsVisible = !this.isDetailsVisible;
  }

  constructor(
    private _funcitionalityService: FunctionalityModelService,
    private _dialog: MatDialog,
    private _router: Router
  ){}

  deleteFunction(): void {
    this._funcitionalityService.deleteFunction(this.model.id);
  }

  editFunction(): void {
    const dialogRef = this._dialog.open(FunctionalityModelPopupComponent, {
      width: '400px',
      data: { ...this.model }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.model.title = result.title;
        this.model.description = result.description;
        this.model.stateId = parseInt(result.stateId);
        this.model.priority = parseInt(result.priority);

        this._funcitionalityService.updateFunction(this.model);
      }
    });
  }

  viewDetails(): void {
    this._router.navigate(['/task-board', this.model.id]);
  }
}


export interface FunctionalityModel {
  id: number;
  title: string;
  description: string;
  user: string;
  priority: number;
  projectId: number;
  stateId: number;
}
