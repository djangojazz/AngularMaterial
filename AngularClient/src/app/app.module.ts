import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EntryComponent } from './Entry/Entry.component';
import { WelcomeComponent } from './Welcome/Welcome.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { EntryHeaderComponent } from './Entry/entry-header/entry-header.component';
import { MaterialTableComponent } from './Material-Table/Material-Table.component';
import { ChangeLogComponent } from './ChangeLog/ChangeLog.component';
import { InputParameterComponent } from './InputParameter/InputParameter.component';
import { InputParameterSubComponent } from './InputParameter/InputParameter-sub/InputParameter-sub.component';

@NgModule({
  declarations: [							
      AppComponent,
      EntryComponent,
      EntryHeaderComponent,
      WelcomeComponent,
      MaterialTableComponent,
      ChangeLogComponent,
      InputParameterComponent,
      InputParameterSubComponent
   ],
  imports: [
      AppRoutingModule,
      BrowserAnimationsModule,
      BrowserModule,
      MaterialModule,
      HttpClientModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
