import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './store'
import App from './App';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
    </Provider>
);
store.subscribe(render)