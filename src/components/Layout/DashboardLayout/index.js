import React from 'react';
import css from './dashboard-layout.module.scss';
import routes from 'src/routes';
import Header from './Header';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {

  return (
    <div className={css.appLayout}>
      <Sidebar/>
      <Header/>
      <Container>
        <main className={css.main}>
          {children}
        </main>
      </Container>
    </div>
  );
};

export default Layout;
