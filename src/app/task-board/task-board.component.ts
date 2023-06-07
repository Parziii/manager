import { Component } from '@angular/core';
import { TaskModel } from '../task-model/task-model.component';
import { FormControl } from '@angular/forms';
import { TaskModelService } from '../service/task-model.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent {
  todoTasks: TaskModel[] = [];
  doingTasks: TaskModel[] = [];
  doneTasks: TaskModel[] = [];
  functionalityId: number = 0;

  constructor(private _taskService: TaskModelService, private _activatedRoute: ActivatedRoute, private _router: Router) {}

  title = new FormControl("");
  description = new FormControl("");
  user = new FormControl("");

  newTask: TaskModel = {
    id: 0,
    functionId: 0,
    title: '',
    description: '',
    user: '',
    priority: 1,
    projectId: 1,
    stateId: 1
  };

  return(): void {
    this._router.navigate(['']);
  }

  addTask(): void {
    const newId = Math.max(...this._taskService.models.map(model => model.id)) + 1;
    const newTask: TaskModel = {
      id: newId,
      functionId: parseInt(this.functionalityId.toString()),
      title: this.title.getRawValue() || '',
      description: this.title.getRawValue() || '',
      user: this.title.getRawValue() || '',
      priority: 1,
      projectId: 1,
      stateId: 1
    };
    this._taskService.createTask(newTask);
  
    this.newTask = {
      id: 0,
      functionId: 0,
      title: '',
      description: '',
      user: '',
      priority: 1,
      projectId: 1,
      stateId: 1
    };
  }


  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.functionalityId = params['id'];
    });

    this.loadTaskModels(this.functionalityId);

      this._taskService.taskChange.subscribe(() => {
      this.loadTaskModels(this.functionalityId);
    });
  }

  loadTaskModels(id: number): void {
  this.todoTasks = [...this._taskService.getAllTodoTasks(id)];
  this.doingTasks = [...this._taskService.getAllDoingTasks(id)];
  this.doneTasks = [...this._taskService.getAllDoneTasks(id)];
}
}
