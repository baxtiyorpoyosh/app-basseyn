import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18n from "i18next";
import App from './App';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['ru', 'uz'],
    fallbackLng: "en",
    detection:{
      order: [ 'path', 'cookie','htmlTag', 'localStorage',  'subdomain'],
      caches: ['cookie']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react:{useSuspense: false},
  });
  const loadingMarkup = (
    <div className="py-4 text-center">
      <h2>Loading ...</h2>
    </div>
  )
  ReactDOM.render(
    <Suspense fallback = {loadingMarkup}>
      <React.StrictMode>
      <App />
    </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
  );

