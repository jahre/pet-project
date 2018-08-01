import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GrouppyComponent } from './grouppy/grouppy.component';
import { ChangedBrieflyComponent } from './changed-briefly/changed-briefly.component';


@NgModule({
  declarations: [
    AppComponent,
    GrouppyComponent,
    ChangedBrieflyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
