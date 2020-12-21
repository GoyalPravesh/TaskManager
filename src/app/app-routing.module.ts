import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewtaskComponent } from './tasks/newtask/newtask.component';
 import { ViewtaskComponent } from './tasks/viewtask/viewtask.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
   { path: 'tasks', component: ViewtaskComponent },
   { path: 'newtask', component: NewtaskComponent},
   { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
