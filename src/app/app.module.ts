import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfoComponent } from './components/info/info.component';
import { ContentComponent } from './components/content/content.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NewtaskComponent } from './components/task/newtask/newtask.component';
import { TasksComponent } from './components/task/tasks/tasks.component';
import { EdittaskComponent } from './components/task/edittask/edittask.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoComponent,
    ContentComponent,
    CalendarComponent,
    NewtaskComponent,
    TasksComponent,
    EdittaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Mascota {
  constructor(
        public nombre: string,
        public raza: string,
        public edad: number
    ) { }
}
