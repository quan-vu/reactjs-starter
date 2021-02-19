import React from 'react';

import MenuUser from './MenuUser';
// import Search from './Search';
// import MenuLocation from './MenuLocation';
// import Notification from './Notification';

import css from './index.module.scss';

const Header = () => {
  return (
    <div className={css.header}>
      {/* MENU LEFT */}
      <div className={css.menuLeft}>
        {/* SEARCH */}
        <div className={css.searchWrap}>{/* <Search /> */}</div>
      </div>

      {/* MENU RIGHT */}
      <div className={css.menuRight}>
        <div className={css.menuRightList}>
          {/* <div className={css.menuRightItem}>
            <MenuLocation />
          </div> */}

          {/* <div className={css.menuRightItem}>
            <div className={css.menuRightDivide} />
          </div> */}

          {/* <div className={css.menuRightItem}>
            <Notification />
          </div> */}

          <div className={css.menuRightItem}>
            <MenuUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
