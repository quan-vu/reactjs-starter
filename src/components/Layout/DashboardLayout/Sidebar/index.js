import React from 'react';
import css from './index.module.scss';
import SidebarMenu from '../SidebarMenu';

const Sidebar = () => {
  return (
    <div className={css.wrap}>
      <div className={css.body}>
        <div className={css.content}>
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
