import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EntryComponent } from './Entry/Entry.component';
import { WelcomeComponent } from './Welcome/Welcome.component';
import { TestService } from './Test.service';

@NgModule({
  declarations: [			
    AppComponent,
    EntryComponent,
      WelcomeComponent
   ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
