import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './hooks/store';

// import './routes/hub/pricing/styles.css'
import {I18nextProvider} from 'react-i18next'
import i18next  from 'i18next';
import './routes/pricing/styles.css'

import global_en from './traslations/En/global.json'
import global_es from './traslations/Es/global.json'
import global_ita from './traslations/Ita/global.json'



i18next.init( {
  interpolation : {escapeValue : false},
  lng : "en",
  resources : {
    es: { 
      global: global_es,
    }, 
    en: { 
      global : global_en,
    },
    ita : {
      global : global_ita
    }
  }
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
