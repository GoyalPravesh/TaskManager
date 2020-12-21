import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/todos.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  constructor(private router: Router, private _todosService: TodosService) { } 
  public todos=[]; 
  public review=[];
  public done=[];
  ngOnInit() {
    this.todos=this._todosService.gettodos();
    this.review=this._todosService.getreview();
    this.done=this._todosService.getdone();
  }
 addTask(){
  this.router.navigate(['/newtask']);
 }
 logout(){
   this.router.navigate(['/']);
 }
 deleteTodo(index: number){
   this._todosService.deletetodo(index);
 }

 onDrop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data,
      event.previousIndex,
      event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex, event.currentIndex);
  }
}
}
