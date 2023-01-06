import {RootState} from '../store';

export const newsFeedSelector = (state: RootState) => state.news.newsFeed;
export const newsSearchResultsSelector = (state: RootState) =>
  state.news.searchResults;
