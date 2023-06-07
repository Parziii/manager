import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionalityBoardComponent } from './functionality-board/functionality-board.component';
import { HeaderComponent } from './header/header.component';
import { FunctionalityModelComponent } from './functionality-model/functionality-model.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskModelComponent } from './task-model/task-model.component';
import { FunctionalityModelService } from './service/functionality-model.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FunctionalityModelPopupComponent } from './functionality-model-popup/functionality-model-popup.component';
import { TaskModelPopupComponent } from './task-model-popup/task-model-popup.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskModelService } from './service/task-model.service';
@NgModule({
  declarations: [
    AppComponent,
    FunctionalityBoardComponent,
    HeaderComponent,
    FunctionalityModelComponent,
    TaskBoardComponent,
    TaskModelComponent,
    FunctionalityModelPopupComponent,
    TaskModelPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    FunctionalityModelService,
    TaskModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
