import React, {useCallback} from 'react';
import {TextInput, useColorScheme} from 'react-native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {resetSearchResults, searchNews} from '../../actions/newsActions';
import styles from './styles';
import {debounce} from 'lodash';

interface ISearchInputProps {
  searchText: string;
  setSearchText: Function;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  searchText,
  setSearchText,
}) => {
  const backgroundColor = useColorScheme() === 'dark' ? '#333' : '#ddd';
  const placeholderColor = useColorScheme() === 'dark' ? '#eee' : '#111';
  const color = useColorScheme() === 'dark' ? '#fff' : '#000';
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchForText = useCallback(
    debounce((text: string) => {
      if (text?.trim().length > 0) {
        dispatch(searchNews(text));
      } else {
        dispatch(resetSearchResults());
      }
    }, 1000),
    [setSearchText, dispatch],
  );

  return (
    <TextInput
      placeholder={'Search'}
      placeholderTextColor={placeholderColor}
      style={[styles.container, {backgroundColor, color}]}
      value={searchText}
      onChangeText={(text: string) => {
        setSearchText(text);
        searchForText(text);
      }}
      maxLength={40}
      returnKeyType={'search'}
    />
  );
};

export default SearchInput;
