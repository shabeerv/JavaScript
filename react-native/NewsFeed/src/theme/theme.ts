import {DefaultTheme} from 'react-native-paper';
// import colors from './src/helpers/colors';
import {lightTheme, darkTheme} from './colors';
// import {useColorScheme} from 'react-native';
// import {colors} from './src/helpers/colors';
import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();
const checkThemeMode = colorScheme === 'dark' ? darkTheme : lightTheme;
// const useDarkMode = () => {
//   const isDarkMode = useColorScheme() === 'dark' ? darkColors : lightColors;
//   return isDarkMode;
// };

export default {
  ...DefaultTheme,
  //   colors,
  colors: checkThemeMode,
  //const backgroundColor = useColorScheme() === 'dark' ? '#000' : '#fff';
};
