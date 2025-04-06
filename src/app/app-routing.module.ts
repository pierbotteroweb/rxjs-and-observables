import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { BehaviorSubjectDemoComponent } from './behavior-subject-demo/behavior-subject-demo.component';
import { ReplaySubjectDemoComponent } from './replay-subject-demo/replay-subject-demo.component';
import { AsyncSubjectDemoComponent } from './async-subject-demo/async-subject-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subject', component: SubjectDemoComponent },
  { path: 'behavior', component: BehaviorSubjectDemoComponent },
  { path: 'replay', component: ReplaySubjectDemoComponent },
  { path: 'async', component: AsyncSubjectDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
