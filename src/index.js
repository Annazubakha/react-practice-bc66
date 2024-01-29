import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from './components/ThemeContext/ThemeContext.jsx';
import 'modern-normalize/modern-normalize.css';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './myRedux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <ThemeProvider theme={theme.dark}> */}
    <BrowserRouter basename="/react-practice-bc66">
      <Provider store={store}>
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
    <GlobalStyle />
    {/* </ThemeProvider> */}
  </>
);
