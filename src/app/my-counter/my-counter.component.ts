import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  readonly counter$: Observable<{
    count: number;
    actionName: string;
  }>;

  constructor(
    private store: Store<{ counter: { count: number; actionName: string } }>,
  ) {
    this.counter$ = store.pipe(select('counter'));
  }

  increment() {
    this.store.dispatch(increment({ actionName: 'increment' }));
  }

  decrement() {
    this.store.dispatch(decrement({ actionName: 'decrement' }));
  }

  reset() {
    this.store.dispatch(reset({ actionName: 'reset' }));
  }
}
