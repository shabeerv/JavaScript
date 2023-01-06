import {combineReducers} from '@reduxjs/toolkit';
import errorReducer from '../reducers/errorReducer';
import feedReducer from '../reducers/newsReducer';
import statusReducer from '../reducers/statusReducer';

export const rootReducer = combineReducers({
  news: feedReducer,
  status: statusReducer,
  error: errorReducer,
});
