import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GrouppyComponent } from './grouppy/grouppy.component';
import { ChangedBrieflyComponent } from './changed-briefly/changed-briefly.component';
import { Feature1Component } from './feature1/feature1.component';


@NgModule({
  declarations: [
    AppComponent,
    GrouppyComponent,
    ChangedBrieflyComponent,
    Feature1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
