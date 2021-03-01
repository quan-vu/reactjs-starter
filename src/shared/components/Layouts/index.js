import React from 'react';
import css from './index.module.scss';
import routes from 'src/routes';
import {
  Link
} from "react-router-dom";
import Header from './Header'

const Layout = ({ children }) => {

  const appTitle = 'Blog';

  return (
    <div>
      <div>Sidebar</div>
      <div className={css.body}>
        <Header routes={routes} title={appTitle}/>
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
