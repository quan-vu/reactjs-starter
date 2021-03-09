import React from 'react';
import css from './index.module.scss';
import Logo from '../../Logo';

const Sidebar = () => {
  return (
    <div className={css.wrap}>
      <div className={css.body}>
        <div className={css.content}>
          I'm Sidebar
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
