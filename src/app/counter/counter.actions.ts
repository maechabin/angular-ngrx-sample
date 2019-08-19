import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter Component] Increment',
  props<{ actionName: string }>(),
);
export const decrement = createAction(
  '[Counter Component] Decrement',
  props<{ actionName: string }>(),
);
export const reset = createAction(
  '[Counter Component] Reset',
  props<{ actionName: string }>(),
);
