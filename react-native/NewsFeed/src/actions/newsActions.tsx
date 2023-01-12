import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {apiClient} from '../controllers/apiClient';
import {NewsCategory} from '../helpers/constants';

export const actionTypes = {
  GETNEWSFEED: 'news/GETNEWSFEED',
  SEARCHNEWS: 'news/SEARCHNEWS',
  RESETSEARCHRESULTS: 'news/RESETSEARCHRESULTS',
};

export const getNewsFeed = createAsyncThunk(
  actionTypes.GETNEWSFEED,
  async (category: string = NewsCategory.business, {rejectWithValue}) => {
    try {
      const URL = 'top-headlines?language=en&category=';
      const response = await apiClient.get(`${URL}${category}`);
      if (response.status === 200) {
        return response?.data?.articles;
      } else {
        console.warn('Something went wrong');
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

export const searchNews = createAsyncThunk(
  actionTypes.SEARCHNEWS,
  async (searchTerm: string = '', {rejectWithValue}) => {
    try {
      const URL = 'everything?q=';
      const response = await apiClient.get(`${URL}${searchTerm}`);
      if (response.status === 200) {
        console.log(response.data.article);
        return response?.data?.articles;
      } else {
        console.warn('Something went wrong');
      }
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

export const resetSearchResults = createAction(actionTypes.RESETSEARCHRESULTS);
