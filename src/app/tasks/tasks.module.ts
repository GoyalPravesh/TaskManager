import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { NewtaskComponent } from './newtask/newtask.component';



@NgModule({
  declarations: [ViewtaskComponent, NewtaskComponent],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
