import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GrouppyComponent } from './grouppy/grouppy.component';
import { ChangedBrieflyComponent } from './changed-briefly/changed-briefly.component';
import { Dev1Component } from './dev1/dev1.component';
import { Dev2Component } from './dev2/dev2.component';


@NgModule({
  declarations: [
    AppComponent,
    GrouppyComponent,
    ChangedBrieflyComponent,
    Dev1Component,
    Dev2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
