import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeLogComponent } from './ChangeLog/ChangeLog.component';
import { EntryComponent } from './Entry/Entry.component';
import { MaterialTableComponent } from './Material-Table/Material-Table.component';
import { WelcomeComponent } from './Welcome/Welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'entry', component: EntryComponent },
  { path: 'materialTable', component: MaterialTableComponent },
  { path: 'changeLog', component: ChangeLogComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
