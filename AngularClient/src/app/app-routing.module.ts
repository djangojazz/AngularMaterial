import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeLogComponent } from './ChangeLog/ChangeLog.component';
import { EntryComponent } from './Entry/Entry.component';
import { InputParameterComponent } from './InputParameter/InputParameter.component';
import { MaterialTableComponent } from './Material-Table/Material-Table.component';
import { WelcomeComponent } from './Welcome/Welcome.component';
import { RichTextOutputComponent } from './RichTextOutput/RichTextOutput.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'entry', component: EntryComponent },
  { path: 'materialTable', component: MaterialTableComponent },
  { path: 'changeLog', component: ChangeLogComponent },
  { path: 'testinput', component: InputParameterComponent },
  { path: 'textoutput', component: RichTextOutputComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
