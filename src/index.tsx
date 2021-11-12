import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import { theme } from './theme';
import './scss/index.scss';

import App from './App';
import './i18n';
import { store } from './redux/store';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

  }
  body {
    background-color: ${theme.whiteBack};
    font-family: 'Open Sans Condensed', sans-serif;
    color: ${theme.whiteText};
    letter-spacing: 1px;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Reset />
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
