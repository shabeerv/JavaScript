import {DefaultTheme} from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme.colors,
  searchbackgroundColor: '#ddd',
  placeholderColor: '#111',
  color: '#000',
  textColor: '#000',
  backgroundColor: '#fff',
  contentColor: '#444',
  readMoreBgColor: '#ddd',
};

const darkTheme = {
  ...DefaultTheme.colors,
  searchbackgroundColor: '#333',
  placeholderColor: '#eee',
  color: '#fff',
  textColor: '#fff',
  backgroundColor: '#000',
  contentColor: '#bbb',
  readMoreBgColor: '#222',
};

// export const colors = {
//   ...DefaultTheme.colors,
//   backgroundColor: '#000',
//   placeholderColor: '#111',
//   color: '#000',
//   textColor: '#000',
//   //bC
//   contentColor: '#444',
//   readMoreBgColor: '#ddd',
// };

export {lightTheme, darkTheme};

//const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';
