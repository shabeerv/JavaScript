import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
} from '@testing-library/react-native';
import SearchInput from '../src/components/SearchInput';
import store from '../src/store';
import {useDispatch, useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock('axios');
describe('SearchInput', () => {
  beforeEach(() => {
    // ! WE MAKE SURE THE MOCKS ARE CLEARED BEFORE EACH TEST CASE
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  afterAll(() => {
    cleanup();
  });

  // ! SETUP THE SPY ON USESELECTOR / USE DISPATCH
  // ! WE DO THIS TO BE ABLE TO CHECK IF THE DISPATCH MOCK GOT CALLED AND HOW MANY TIMES
  const reactRedux = {useDispatch, useSelector};
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  test('fire changeText event', async () => {
    const mockStore = configureStore();

    const initialState = {
      newsFeed: [],
      searchResults: [],
    };

    let updatedStore = mockStore(initialState);
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    updatedStore.dispatch = mockDispatch;

    const onEventMock = jest.fn();
    // jest.mock('axios');
    render(
      <Provider store={updatedStore}>
        <SearchInput searchText="test" setSearchText={onEventMock} />{' '}
      </Provider>,
    );

    expect(updatedStore.dispatch).not.toHaveBeenCalled();
    fireEvent(screen.getByPlaceholderText('Search'), 'onChangeText', 'test');
    expect(updatedStore.dispatch).not.toHaveBeenCalled();
    expect(onEventMock).toHaveBeenCalledWith('test');
    expect(updatedStore.dispatch).toHaveBeenCalledTimes(1);
  });
});
