import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://1hb8wbdfgd8m.usemoralis.com:2053/server"
      appId="mKVD6aFXin14Kp2hDul9rBAjAliieaLxz8mw6OKo"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
