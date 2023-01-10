import {StyleSheet} from 'react-native';
// import {ThemeProp} from 'react-native-paper/lib/typescript/types';

export default (_: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexGrow: 1,
      paddingTop: 20,
      backgroundColor: _.colors.backgroundColor,
    },
    list: {
      flex: 1,
      flexGrow: 1,
      paddingVertical: 8,
    },
  });
