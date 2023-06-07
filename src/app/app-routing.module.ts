import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalityBoardComponent } from './functionality-board/functionality-board.component';
import { TaskBoardComponent } from './task-board/task-board.component';

const routes: Routes = [
  {path: '', component: FunctionalityBoardComponent},
  {path: 'task-board/:id', component: TaskBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
