import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export const initialState = {
  count: 0,
  actionName: 'no action',
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, payload) => {
    return {
      ...state,
      count: state.count + 1,
      actionName: payload.actionName,
    };
  }),
  on(decrement, (state, payload) => {
    return {
      ...state,
      count: state.count - 1,
      actionName: payload.actionName,
    };
  }),
  on(reset, (state, payload) => {
    return {
      ...state,
      count: 0,
      actionName: payload.actionName,
    };
  }),
);
