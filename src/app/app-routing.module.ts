import { Task } from './services/todo.service';
//import {GtdComponent} from "./components/gtd/gtd.component"
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component';
import { TasksComponent } from '././components/task/tasks/tasks.component';
import {NewtaskComponent} from './components/task/newtask/newtask.component';
import {EdittaskComponent} from './components/task/edittask/edittask.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'calendar', component: CalendarComponent },
  { path: 'tareas', component: TasksComponent },
  { path: 'nuevatareas', component: NewtaskComponent},
  { path: 'edit/:id', component: EdittaskComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
