import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import store from './store';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
        <ToastContainer />
        <GlobalStyles />
      </Provider>
    </>
  );
}

export default App;
