import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';

import { AddUtakmicaComponent } from './utakmica/add-utakmica/add-utakmica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AddUtakmicaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
