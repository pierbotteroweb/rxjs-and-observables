import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search/user-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { BehaviorSubjectDemoComponent } from './behavior-subject-demo/behavior-subject-demo.component';
import { ReplaySubjectDemoComponent } from './replay-subject-demo/replay-subject-demo.component';
import { AsyncSubjectDemoComponent } from './async-subject-demo/async-subject-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    HomeComponent,
    SubjectDemoComponent,
    BehaviorSubjectDemoComponent,
    ReplaySubjectDemoComponent,
    AsyncSubjectDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
