// index.js

import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ React 18 way
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './app/store';
import ToggleColorMode from './utils/ToggleColorMode';

// ✅ Get the root DOM element
const container = document.getElementById('root');

// ✅ Create root with React 18 API
const root = createRoot(container);

// ✅ Render your app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorMode>
    </Provider>
  </React.StrictMode>,
);
