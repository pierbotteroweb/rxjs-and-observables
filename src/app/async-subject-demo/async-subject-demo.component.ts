import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject-demo',
  template: `
   <h3>AsyncSubject Demo</h3>
  <button (click)="startProcess()">Start Process</button>
  <p *ngIf="result">Final Result: {{ result }}</p>
  `,
  styles: [
  ]
})
export class AsyncSubjectDemoComponent {
  result ='';

  startProcess() {
    const async$ = new AsyncSubject<string>();
    async$.subscribe(val => this.result = val);

    async$.next('Loading...');
    async$.next('Processing...');
    async$.next('Final Result Ready...');
    async$.complete();
  }

}
