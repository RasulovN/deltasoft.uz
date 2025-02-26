import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import './index.css';



import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <App />
      </CookiesProvider>
      </I18nextProvider>
    </Provider>
  );