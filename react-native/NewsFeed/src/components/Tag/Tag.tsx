import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ITagProps {
  category: string;
  selectedCategory: string;
  setSelectedCategory: Function;
}

const Tag: React.FC<ITagProps> = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  // const textColor = useColorScheme() === 'dark' ? '#fff' : '#000';
  const theme = useAppTheme();
  const style = styles(theme);

  const handlePress = useCallback(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);

  // console.log(category.charAt(0).toUpperCase() + category.slice(1));

  return (
    <TouchableOpacity
      style={[style.container, selectedCategory === category && style.selected]}
      testID="tag"
      onPress={handlePress}>
      <Text style={style.text} testID="tagText">
        {`${category.charAt(0).toUpperCase() + category.slice(1)}`}
      </Text>
    </TouchableOpacity>
  );
};

export default Tag;
