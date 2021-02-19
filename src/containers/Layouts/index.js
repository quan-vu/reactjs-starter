import React from 'react';
import css from './index.module.scss';

import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />

      <div className={css.body}>
        <Header />

        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
