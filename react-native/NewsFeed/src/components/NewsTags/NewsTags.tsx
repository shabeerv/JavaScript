import React from 'react';
import {FlatList} from 'react-native';
import {NewsCategory} from '../../helpers/constants';
import Tag from '../Tag';
import styles from './styles';

interface INewsTagsProps {
  selectedCategory: string;
  setSelectedCategory: Function;
}

const NewsTags: React.FC<INewsTagsProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Object.keys(NewsCategory)}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Tag
          category={item}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default NewsTags;
