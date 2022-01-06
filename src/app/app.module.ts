import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfoComponent } from './components/info/info.component';
import { ContentComponent } from './components/content/content.component';
import { GtdComponent } from './components/gtd/gtd.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoComponent,
    ContentComponent,
    GtdComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
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
