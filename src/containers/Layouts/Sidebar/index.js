import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import css from './index.module.scss';
import { IconFacebook, IconTwitter } from './IconsFooter';
import { getPath } from '../../../routes';

import MainCategories from './MainCategories';
// import SubCategories from './SubCategories';

const Logo = () => (
  <div className={css.header}>
    <div className={css.logoWrap}>
      <Link to={getPath('ROOT')} className={css.logo}>
        <img
          src={process.env.PUBLIC_URL + './images/logo.png'}
          alt="Logo"
        />
      </Link>
    </div>
  </div>
);

const FooterCopyright = () => (
  <div className={css.footerWrap}>
    <div className={css.footer}>
      <div className={css.copyright}>&copy; 2021</div>
      <div className={css.socials}>
        <IconButton size="small">
          <IconFacebook />
        </IconButton>

        <IconButton size="small">
          <IconTwitter />
        </IconButton>
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <div className={css.wrap}>
      <div className={css.body}>
        <Logo />

        <div className={css.content}>
          <MainCategories />
          {/* <SubCategories /> */}
        </div>

        <FooterCopyright />
      </div>
    </div>
  );
};

export default Sidebar;
