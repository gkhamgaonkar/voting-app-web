import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddVotingQuestionComponent } from './add-voting-question/add-voting-question.component';
import { DisplayVotingQuestionComponent } from './display-voting-question/display-voting-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVotingQuestionComponent,
    DisplayVotingQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
