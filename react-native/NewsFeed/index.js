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

const RRedux = () => (
  <Provider store={store}>
    <PersistGate
      loading={<ActivityIndicator size={'large'} color={'#000'} />}
      persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RRedux);
