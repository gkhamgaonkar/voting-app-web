import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddVotingQuestionComponent} from "./add-voting-question/add-voting-question.component";
import {DisplayVotingQuestionComponent} from "./display-voting-question/display-voting-question.component";

const routes: Routes = [
  { path: 'add', component: AddVotingQuestionComponent }
  ,{ path: 'show', component: DisplayVotingQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
