import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { 
  debounceTime,
  switchMap,
  takeUntil
} from 'rxjs/operators';
import { QuoteService } from 'src/app/quote.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html'
})
export class UserSearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  quotes:any[] =[];
  private destroy$ = new Subject<void>();

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(query => this.quoteService.searchQuotes(query)),
      takeUntil(this.destroy$)
    )
    .subscribe(results => {
      this.quotes = results
    })
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
