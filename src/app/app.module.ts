import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GrouppyComponent } from './grouppy/grouppy.component';
import { ChangedBrieflyComponent } from './changed-briefly/changed-briefly.component';
import { FeatureComponent } from './feature/feature.component';
import { JustLostComponent } from './just-lost/just-lost.component';


@NgModule({
  declarations: [
    AppComponent,
    GrouppyComponent,
    ChangedBrieflyComponent,
    FeatureComponent,
    JustLostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
