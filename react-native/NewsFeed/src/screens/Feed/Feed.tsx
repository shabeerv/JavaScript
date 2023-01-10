import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {actionTypes, getNewsFeed} from '../../actions/newsActions';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {
  newsFeedSelector,
  newsSearchResultsSelector,
} from '../../selectors/newsSelector';
import styles from './styles';
import uuid from 'react-native-uuid';
import NewsArticle from '../../components/NewsArticle';
import {isLoadingSelector} from '../../selectors/statusSelector';
import {NewsCategory} from '../../helpers/constants';
import NewsTags from '../../components/NewsTags';
import SearchInput from '../../components/SearchInput';
// import {useTheme} from '@react-navigation/native';

import {useAppTheme} from '../../hooks/useAppTheme';

const Feed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    NewsCategory.business,
  );
  const [searchText, setSearchText] = useState('');

  const newsFeed = useAppSelector(newsFeedSelector);
  const searchResults = useAppSelector(newsSearchResultsSelector);
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(state =>
    isLoadingSelector([actionTypes.GETNEWSFEED], state),
  );

  // const  = useAppTheme();
  const theme = useAppTheme();
  const style = styles(theme);

  useEffect(() => {
    dispatch(getNewsFeed(selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleRefresh = useCallback(() => {
    dispatch(getNewsFeed(selectedCategory));
  }, [dispatch, selectedCategory]);

  return (
    <View style={style.container}>
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      {!searchText?.trim() && (
        <NewsTags
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      <FlatList
        keyExtractor={() => uuid.v4()?.toString()}
        showsVerticalScrollIndicator={false}
        data={searchText?.trim() ? searchResults : newsFeed}
        renderItem={({item, index}: any) => (
          <NewsArticle post={item} index={index} />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
        style={style.list}
      />
    </View>
  );
};

export default Feed;
