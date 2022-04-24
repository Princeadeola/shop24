import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './components/Providers/StateProvider';
import reducer, { initialState } from './components/Providers/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />
    </StateProvider>
  </React.StrictMode>
);