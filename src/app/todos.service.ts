import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosArray=[];
  private reviewArray=[]
  private doneArray=[];
  constructor() {}

  gettodos(){
    return this.todosArray;
  }
  getreview(){
    return this.reviewArray;
  }
  getdone()
  {
    return this.doneArray;
  }
   addTodo(todo: Object){
     this.todosArray.push(todo);
   }
   deletetodo(i: number)
   {
     this.todosArray.splice(i,1);
   }
}
