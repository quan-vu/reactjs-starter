import React from 'react';
import css from './index.module.scss';
import routes from '../../../routes';
import {
  Link
} from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <div>Sidebar</div>
      <div className={css.body}>
        <header className={css.header}>
          <div className={css.menu}>
              <ul>
                {routes.map((route) => (
                  <li key={route.key}>
                    <Link to={route.path}>{route.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
        </header>

        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
