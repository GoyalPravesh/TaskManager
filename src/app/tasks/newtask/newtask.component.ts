import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/todos.service';
@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
  constructor( private router: Router, private _todosService: TodosService) { }
  ngOnInit() {

  }
  addToDo(newToDol: string)
  {
    if(newToDol=='')
    alert("Atleast create a task bro!!!")
    else{
    var newToDo={
      label: newToDol,
      date: new Date().toLocaleDateString() 
       }
    this._todosService.addTodo(newToDo);
    console.log(newToDo); 
    this.router.navigate(['/tasks']);
      }
  }
}
