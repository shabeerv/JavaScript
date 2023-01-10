/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store/index';
import {ActivityIndicator} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
// import {Appearance} from 'react-native';
import theme from './src/theme/theme';
// import {darkTheme, lightTheme} from './src/helpers/colors';

// import {
//   Provider as PaperProvider,
//   DefaultTheme as PaperDefaultTheme,
//   DarkTheme as PaperDarkTheme,
// } from 'react-native-paper';

// const CustomDefaultTheme = {
//   ...PaperDefaultTheme,
//   colors: {
//     ...PaperDefaultTheme.colors,
//     background: '#ffffff',
//     text: '#333333',
//   },
// };

// const CustomDarkTheme = {
//   ...PaperDarkTheme,
//   colors: {
//     ...PaperDarkTheme.colors,
//     background: '#333333',
//     text: '#ffffff',
//   },
// };

// const colorScheme = Appearance.getColorScheme();
// const isDarkMode =
//   colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme;

// const theme = isDarkMode;
const RRedux = () => {
  //   const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator size={'large'} color={'#000'} />}
        persistor={persistor}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RRedux);
