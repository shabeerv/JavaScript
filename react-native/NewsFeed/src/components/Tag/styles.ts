import {StyleSheet} from 'react-native';
export default (_: any) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#FFA500',
      borderRadius: 12,
      height: 28,
      paddingHorizontal: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 24,
      backgroundColor: '#FFA50066',
    },
    text: {
      fontSize: 14,
      fontWeight: '500',
      color: _.textColor,
    },
    selected: {
      backgroundColor: '#FF8800',
      borderColor: '#FF6600',
    },
  });
