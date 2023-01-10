import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Back} from '../../assets';
import styles from './styles';
import {useAppTheme} from '../../hooks/useAppTheme';

interface Route {
  params: {
    article: {
      author: string;
      title: string;
      urlToImage: string;
      publishedAt: string;
      url: string;
      content: string;
    };
    articleIndex: number;
  };
}

const NewsDetails: React.FC<{route: Route}> = ({route}) => {
  const {article, articleIndex} = route?.params;
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const theme = useAppTheme();
  const style = styles(theme);

  const handleURLPress = useCallback(() => {
    Linking.openURL(article?.url);
  }, [article]);

  return (
    <>
      <TouchableOpacity style={style.crossContainer} onPress={goBack}>
        <Image style={style.cross} source={Back} />
      </TouchableOpacity>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={style.container}
        contentContainerStyle={style.contentContainer}>
        <SharedElement id={`article#${articleIndex}-Image`}>
          <Image
            style={style.image}
            source={{uri: article?.urlToImage ?? 'https://picsum.photos/1000'}}
            resizeMode={'cover'}
          />
        </SharedElement>
        <Text style={style.title}>{article?.title}</Text>
        <Text style={style.content}>{article?.content}</Text>
      </ScrollView>
      <View style={style.readMoreContainer}>
        <Text style={style.readMoreText} numberOfLines={2}>
          Read more at{' '}
          <Text style={style.link} onPress={handleURLPress}>
            {article?.url}
          </Text>
        </Text>
      </View>
    </>
  );
};

(NewsDetails as any).sharedElements = (route: any) => {
  const {articleIndex} = route.params;
  return [`article#${articleIndex}-Image`];
};

export default NewsDetails;
