import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { TimerComponent } from './count-down/timer/timer.component';
@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
