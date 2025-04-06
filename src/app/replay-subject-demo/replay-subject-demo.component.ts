import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject-demo',
  template: `
    <h3>Replay Subject Demo</h3>
    <input [(ngModel)]="message" placeholder="Type a message" />
    <button (click)="sendMessage()">Send</button>
    <button (click)="joinChat()">New User Joins</button>
    <ul>
        <li *ngFor="let msg of chatLog">{{ msg }}</li>
    </ul>
  `,
  styles: [
  ]
})
export class ReplaySubjectDemoComponent {
  private chat$ = new ReplaySubject<string>(3);
  message = '';
  chatLog: string[] = [];

  sendMessage() {
    if (this.message.trim()) {
      this.chat$.next(this.message);
      this.message = '';
    }
  }

  joinChat() {
    const userLog: string[] = [];
    this.chat$.subscribe(msg => userLog.push('User sees: ' + msg));
    this.chatLog = [...userLog];
  }

}
