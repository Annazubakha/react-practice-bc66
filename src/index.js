import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import 'modern-normalize/modern-normalize.css';
import { GlobalStyle } from 'styles/CreateGlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </>
);
