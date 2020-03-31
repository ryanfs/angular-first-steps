import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { JobListComponent } from './job-list/job-list.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatIconModule,
      RouterModule.forRoot([
        { path: '', component: JobListComponent },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
