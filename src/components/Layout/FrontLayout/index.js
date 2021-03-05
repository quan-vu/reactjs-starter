import React from 'react';
import css from './front-layout.module.scss';
import routes from 'src/routes';
import Header from './Header';
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {

  return (
    <div className={css.appLayout}>
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
