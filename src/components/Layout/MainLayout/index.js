import React from 'react';
import css from './index.module.scss';
import routes from 'src/routes';
import {
  Link
} from "react-router-dom";

import Header from './Header';

const Layout = ({ children }) => {

  const appTitle = 'Blog';

  return (
    <div>
      <div className={css.body}>
        <Header routes={routes} title={appTitle}/>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
