import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject-demo',
  template: `
    <h3>BehaviorSubject Demo</h3>
    <button (click)="login()">Login</button>
    <button (click)="logout()">Logout</button>
    <p>Current State: {{ currentState }}</p>
  `
})
export class BehaviorSubjectDemoComponent {
  private userState$ = new BehaviorSubject<string>('Logged Out');
  currentState = 'Logged Out';

  constructor() {
    this.userState$.subscribe(state => this.currentState = state);
  }

  login() {
    this.userState$.next('Logged In');
  }

  logout() {
    this.userState$.next('Logged Out');
  }

}
