import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SharedElement} from 'react-navigation-shared-element';
import styles from './styles';

type Post = {
  title: string;
  urlToImage: string;
  publishedAt: string;
  url: string;
  author: string;
};

const NewsArticle: React.FC<{
  post: Post;
  index: number;
}> = ({post, index}) => {
  console.log(post, index);
  const navigation: any = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.navigate('NewsDetails', {article: post, articleIndex: index});
  }, [index, navigation, post]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handleNavigate}>
      <SharedElement
        style={styles.imageContainer}
        id={`article#${index}-Image`}>
        <Image
          source={{
            uri: post?.urlToImage
              ? post?.urlToImage
              : 'https://via.placeholder.com/150',
            cache: 'force-cache',
          }}
          resizeMode={'cover'}
          style={styles.image}
        />
      </SharedElement>
      {/* <Image
        source={{
          uri: post?.urlToImage
            ? post?.urlToImage
            : 'https://via.placeholder.com/150',
          cache: 'force-cache',
        }}
        resizeMode={'cover'}
        style={styles.image}
      /> */}
      <LinearGradient
        colors={['#0000', '#000A', '#000']}
        style={styles.titleContainer}>
        <Text style={styles.text}>{post?.title}</Text>
        <Text style={styles.timestamp}>
          {moment(post?.publishedAt).format('HH:MM DD, MMMM')}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default NewsArticle;
