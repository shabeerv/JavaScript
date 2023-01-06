import {
  getNewsFeed,
  resetSearchResults,
  searchNews,
} from '../actions/newsActions';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  newsFeed: [],
  searchResults: [],
};

const feedReducer = createReducer(initialState, builder => {
  builder.addCase(getNewsFeed.fulfilled, (state, {payload}) => {
    state.newsFeed = payload;
  });

  builder.addCase(searchNews.fulfilled, (state, {payload}) => {
    state.searchResults = payload;
    console.log('from newsReducer...');
  });

  builder.addCase(resetSearchResults, state => {
    state.searchResults = [];
  });
});

export default feedReducer;
