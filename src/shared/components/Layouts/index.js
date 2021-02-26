import React from 'react';
import css from './index.module.scss';

const Layout = ({ children }) => {
  return (
    <div>
      <div>Sidebar</div>
      <div className={css.body}>
        <div>Header</div>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
