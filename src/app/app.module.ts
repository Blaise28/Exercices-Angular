import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyConditionComponent } from './zippy-condition/zippy-condition.component';
import { ZippyContentDirective } from './zippy-content.directive';
@NgModule({
  declarations: [
    AppComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyConditionComponent,
    ZippyContentDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
