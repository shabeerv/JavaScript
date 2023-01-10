import React, {useCallback} from 'react';
import {TextInput} from 'react-native';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {resetSearchResults, searchNews} from '../../actions/newsActions';
import styles from './styles';
import {debounce} from 'lodash';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ISearchInputProps {
  searchText: string;
  setSearchText: Function;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  searchText,
  setSearchText,
}) => {
  const dispatch = useAppDispatch();

  const theme = useAppTheme();
  const style = styles(theme);

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
      placeholderTextColor={theme.colors.placeholderColor}
      style={style.container}
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
