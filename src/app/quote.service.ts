import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private mockQuotes = [
    'Stay hungry, stay foolish.',
    'Life is what happens when you’re busy making other plans.',
    'Get busy living or get busy dying.',
    'The only impossible journey is the one you never begin.',
    'Do not go where the path may lead, go instead where there is no path and leave a trail.',
  ];

  searchQuotes(query: string) {
    return of(this.mockQuotes).pipe(
      delay(500),
      map((quotes: Array<string>) =>
        quotes.filter(q =>
          q.toLowerCase().includes(query.toLowerCase())
        )
      )
    )
  }
}
