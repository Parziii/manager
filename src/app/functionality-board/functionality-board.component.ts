import { Component, OnInit } from '@angular/core';
import { FunctionalityModel } from '../functionality-model/functionality-model.component';
import { FunctionalityModelService } from '../service/functionality-model.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-functionality-board',
  templateUrl: './functionality-board.component.html',
  styleUrls: ['./functionality-board.component.scss']
})
export class FunctionalityBoardComponent implements OnInit {

  todoFunctions: FunctionalityModel[] = [];
  doingFunctions: FunctionalityModel[] = [];
  doneFunctions: FunctionalityModel[] = [];

  constructor(private _funcitionalityService: FunctionalityModelService) {}

  title = new FormControl("");
  description = new FormControl("");
  user = new FormControl("");

  newFunctionality: FunctionalityModel = {
    id: 0,
    title: '',
    description: '',
    user: '',
    priority: 1,
    projectId: 1,
    stateId: 1
  };

  addFunctionality(): void {
    const newId = Math.max(...this._funcitionalityService.models.map(model => model.id)) + 1;
    const newFunctionality: FunctionalityModel = {
      id: newId,
      title: this.title.getRawValue() || '',
      description: this.title.getRawValue() || '',
      user: this.title.getRawValue() || '',
      priority: 1,
      projectId: 1,
      stateId: 1
    };
    this._funcitionalityService.createFunction(newFunctionality);
  
    this.newFunctionality = {
      id: 0,
      title: '',
      description: '',
      user: '',
      priority: 1,
      projectId: 1,
      stateId: 1
    };
  }


  ngOnInit(): void {
    this.loadFunctionalityModels();

    this._funcitionalityService.functionalityChange.subscribe(() => {
      this.loadFunctionalityModels();
    });
  }

  loadFunctionalityModels(): void {
  this.todoFunctions = [...this._funcitionalityService.getAllTodoFunctions()];
  this.doingFunctions = [...this._funcitionalityService.getAllDoingFunctions()];
  this.doneFunctions = [...this._funcitionalityService.getAllDoneFunctions()];
}
}
