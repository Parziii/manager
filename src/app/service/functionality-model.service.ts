import { EventEmitter, Injectable } from '@angular/core';
import { FunctionalityModel } from '../functionality-model/functionality-model.component';


@Injectable()
export class FunctionalityModelService {

  public models: FunctionalityModel[] = [{
    id: 1,
    title: "Login",
    description: "Allows users to log in to the system",
    user: "Jan Kowalski",
    projectId: 1,
    priority: 4,
    stateId: 1
  },
  {
    id: 2,
    title: "Create Post",
    description: "Enables users to create new posts",
    user: "Jan Kowalski",
    projectId: 1,
    priority: 2,
    stateId: 2
  },
  {
    id: 4,
    title: "Delete Comment",
    description: "Enables users to remove their own comments",
    user: "Jan Kowalski",
    projectId: 1,
    priority: 3,
    stateId: 3
  }];

  public functionalityChange: EventEmitter<void> = new EventEmitter<void>();

  public getAllFunctions(): FunctionalityModel[] {
    return this.models;
  }

  public getFunctionById(id: number): FunctionalityModel | undefined {
    return this.models.find(model => model.id === id) as FunctionalityModel;
  }

  public createFunction(model: FunctionalityModel): void {
    this.models.push(model);
    this.functionalityChange.emit();
  }

  public updateFunction(updatedModel: FunctionalityModel): void {
    const index = this.models.findIndex(model => model.id === updatedModel.id);
    if (index !== -1) {
      this.models[index] = updatedModel;
      this.functionalityChange.emit();
    }
  }

  public deleteFunction(id: number): void {
    const index = this.models.findIndex(model => model.id === id);
    if (index !== -1) {
      this.models.splice(index, 1);
    }
    this.functionalityChange.emit();
  }

  getAllTodoFunctions(): FunctionalityModel[] {
    return this.models.filter(model => model.stateId === 1);
  }

  public getAllDoingFunctions(): FunctionalityModel[] {
    return this.models.filter(model => model.stateId === 2);
  }

  public getAllDoneFunctions(): FunctionalityModel[] {
    return this.models.filter(model => model.stateId === 3);
  }
}
