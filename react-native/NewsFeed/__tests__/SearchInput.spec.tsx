import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
} from '@testing-library/react-native';
import SearchInput from '../src/components/SearchInput';
import {useDispatch, useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

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
      searchResults: [
        {
          author: 'Tanya Aldred (now) and Tim de Lisle (later)',
          content:
            '32nd over: Pakistan 133-2 (Shakeel 47, Babar 71) Andersons over starts with a mix-up between Shakeel and Babar, Babar sends Shakeel back and, if Crawley had hit the stumps from square leg, Shakeel wo… [+1631 chars]',
          description:
            '<ul><li>Updates from the second day’s play in Multan</li><li>Get in touch: contact Tanya by email or on Twitter</li></ul>29th over: Pakistan 107-2(Shakeel 32 Babar 63) There’s a haze to the Multan air but Jimmy Anderson has the ball regardless. Oh my tired ey…',
          publishedAt: '2022-12-10T04:50:28Z',
          source: {id: null, name: 'The Guardian'},
          title: 'Pakistan v England: second Test day two – live',
          url: 'https://www.theguardian.com/sport/live/2022/dec/10/pakistan-v-england-second-test-day-two-live',
          urlToImage:
            'https://i.guim.co.uk/img/media/9be8502f61e3b61b8ed36c3fd09ba69b6a1d8f5d/0_103_2892_1735/master/2892.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=de237429faab69618fff9f13a428a452',
        },
      ],
    };

    let updatedStore = mockStore(initialState);
    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    updatedStore.dispatch = mockDispatch;

    const onEventMock = jest.fn();

    render(
      <Provider store={updatedStore}>
        <SearchInput searchText="test" setSearchText={onEventMock} />
      </Provider>,
    );

    // console.log(screen.getByPlaceholderText('Search'), 'onChangeText', 'test');

    const search = screen.getByPlaceholderText('Search');
    // console.log(search);
    fireEvent(search, 'onChangeText', 'test');
  });
});
