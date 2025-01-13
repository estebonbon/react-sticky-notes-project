import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the updated import
import { HashRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

