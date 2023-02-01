import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
// import store from "./redux/store";
import store from './redux/store';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
