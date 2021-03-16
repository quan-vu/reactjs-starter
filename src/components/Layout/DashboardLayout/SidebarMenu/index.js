import React from 'react';
import css from './index.module.scss';
import routes from 'src/routes';
import { Link } from "react-router-dom";

const menuItems = routes.map((route) => {
  return <li key={route.key}>
    <Link to={route.path}>{route.name}</Link>
  </li>
});

const SidebarMenu = () => {
  return (
    <div className={css.wrap}>
      <ul>{menuItems}</ul>
    </div>
  );
};

export default SidebarMenu;
