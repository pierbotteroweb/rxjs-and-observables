import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  template: `
    <h3>Subject Demo</h3>
    <button (click)="emitEvent()">Emit Event</button>
    <ul>
        <li *ngFor="let log of logs">{{ log }}</li>
    </ul>
  `
})
export class SubjectDemoComponent {
  private subject$ = new Subject<string>();
  logs: string[] = [];

  constructor() {
    this.subject$.subscribe(val => this.logs.push('A: ' + val));
    this.subject$.subscribe(val => this.logs.push('B: ' + val));
  }
  
  emitEvent() {
    this.subject$.next(`Event at ` + new Date().toLocaleTimeString())
  }

}
