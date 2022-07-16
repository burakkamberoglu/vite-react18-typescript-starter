import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
/* import {AuthProvider} from '@/hooks/AuthContext'; */
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <App />
      {/* </AuthProvider> */}
    </BrowserRouter>
  </Provider>,
);
