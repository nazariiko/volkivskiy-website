import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { poemsReducer } from './poemsReducer';

export const rootReducer = combineReducers({
  page: pageReducer,
  poems: poemsReducer,
});
