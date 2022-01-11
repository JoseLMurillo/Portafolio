//import {GtdComponent} from "./components/gtd/gtd.component"
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from './components/calendar/calendar.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
