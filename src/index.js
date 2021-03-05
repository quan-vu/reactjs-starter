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

ReactDOM.render(
  // Tempory fix for React 17+ with: Error findDOMNode is deprecated in StrictMode
  // <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <SnackbarProvider maxSnack={3}>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
