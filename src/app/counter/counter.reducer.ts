import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, state => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(decrement, state => {
    return {
      ...state,
      count: state.count - 1,
    };
  }),
  on(reset, state => {
    return {
      ...state,
      count: 0,
    };
  }),
);
