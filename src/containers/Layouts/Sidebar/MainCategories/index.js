import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import css from './index.module.scss';
import { getPath } from '../../../../routes';
import { menuItems } from '../../../../menuItems';

const LinkTitle = ({ menu, to, onCollapse, onSelectMenu }) => {
  if (to) {
    return (
      <Link to={to} onClick={() => onSelectMenu(menu)}>
        <div className={css.menuTitle}>
          <div className={css.menuIcon}>{menu.icon}</div>
          <span className={css.menuLabel}>{menu.label}</span>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={clsx(css.menuTitle, css.menuMultiple)}
      onClick={() => onCollapse(menu)}
    >
      <div className={css.menuIcon}>{menu.icon}</div>
      <span className={css.menuLabel}>{menu.label}</span>
    </div>
  );
};

const SubMenu = ({ menu, onSelectSubMenu }) => {
  return (
    <>
      {menu?.list && Array.isArray(menu.list) && (
        <ul>
          {menu.list.map((subMenu, index) => (
            <li key={index}>
              <Link
                to={subMenu.path}
                onClick={() => onSelectSubMenu(subMenu, menu)}
              >
                {subMenu.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const MainCategories = () => {
  const [menusOpen, setMenusOpen] = React.useState(['ALL']);
  const [menuActive, setMenuActive] = React.useState('ALL');

  const handleChangeCollapse = (menu) => {
    // console.log('menu', menu);
    // console.log('menusOpen', menusOpen);

    let newMenuOpen = [...menusOpen];

    if (newMenuOpen.includes(menu.key)) {
      newMenuOpen = newMenuOpen.filter((item) => item !== menu.key);
    } else {
      newMenuOpen.push(menu.key);
    }

    setMenusOpen(newMenuOpen);
  };

  const handleSelectMenu = (menu) => {
    // setMenusOpen('');
    setMenuActive(menu.key);
  };

  const handleSelectSubMenu = (subMenu, menu) => {
    setMenuActive(menu.key);
  };

  return (
    <ul className={css.menu}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={clsx(
            css.menuItem,
            menusOpen.includes(menu.key) && css.menuCollapseOpen,
            menuActive === menu.key && css.menuActive,
          )}
        >
          <LinkTitle
            menu={menu}
            menuActive={menuActive}
            to={getPath(menu.key)}
            onCollapse={handleChangeCollapse}
            onSelectMenu={handleSelectMenu}
          />

          <SubMenu menu={menu} onSelectSubMenu={handleSelectSubMenu} />
        </li>
      ))}
    </ul>
  );
};

export default MainCategories;
