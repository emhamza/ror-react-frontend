import '@hotwired/turbo-rails';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
