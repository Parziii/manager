import { EventEmitter, Injectable } from '@angular/core';
import { FunctionalityModel } from '../functionality-model/functionality-model.component';
import { TaskModel } from '../task-model/task-model.component';


@Injectable()
export class TaskModelService {

  public models: TaskModel[] = [{
    id: 1,
    functionId: 1,
    title: "Create login",
    description: "Allows users to log in to the system",
    user: "Jan Kowalski",
    projectId: 1,
    priority: 4,
    stateId: 1
  },
  {
    id: 2,
    functionId: 2,
    title: "Post modification",
    description: "Enables users to create new posts",
    user: "Jan Kowalski",
    projectId: 1,
    priority: 2,
    stateId: 2
  },
  {
    id: 4,
    functionId: 4,
    title: "Comment modification",
    description: "Enables users to remove their own comments",
    user: "Jan Kowalski",
    projectId: 1,
    priority: 3,
    stateId: 3
  }];

  public taskChange: EventEmitter<void> = new EventEmitter<void>();

  public getAllTasks(): TaskModel[] {
    return this.models;
  }

  public getTaskById(id: number): TaskModel | undefined {
    return this.models.find(model => model.id === id) as TaskModel;
  }

  public createTask(model: TaskModel): void {
    this.models.push(model);
    this.taskChange.emit();
  }

  public updateTask(updatedModel: TaskModel): void {
    const index = this.models.findIndex(model => model.id === updatedModel.id);
    if (index !== -1) {
      this.models[index] = updatedModel;
      this.taskChange.emit();
    }
  }

  public deleteTask(id: number): void {
    const index = this.models.findIndex(model => model.id === id);
    if (index !== -1) {
      this.models.splice(index, 1);
    }
    this.taskChange.emit();
  }

  getAllTodoTasks(id: number): TaskModel[] {
    const functionId = parseInt(id.toString());
    return this.models.filter(model => model.stateId === 1 && model.functionId === functionId);
  }
  
  getAllDoingTasks(id: number): TaskModel[] {
    const functionId = parseInt(id.toString());
    return this.models.filter(model => model.stateId === 2 && model.functionId === functionId);
  }
  
  getAllDoneTasks(id: number): TaskModel[] {
    const functionId = parseInt(id.toString());
    return this.models.filter(model => model.stateId === 3 && model.functionId === functionId);
  }
  
}
