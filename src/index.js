import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { RecoilRoot } from 'recoil';
import App from './components/App/App';
import './index.scss';
import defaultTheme from './themes/default-theme';

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  // Tempory fix for React 17+ with: Error findDOMNode is deprecated in StrictMode
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
    </ApolloProvider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
