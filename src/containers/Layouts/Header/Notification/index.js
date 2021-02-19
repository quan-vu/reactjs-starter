import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import css from './index.module.scss';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import NotificationsIcon from '@material-ui/icons/Notifications';

const StyledMenu = withStyles({
  paper: {
    border: 'var(--borderColor-dropdown)',
    boxShadow: 'var(--boxShadow-dropdown)',
    borderRadius: '0px 4px 4px 4px',
    width: '100%',
    maxWidth: 262
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: -8,
      horizontal: 'right'
    }}
    className={css.menuListWrap}
    {...props}
  />
));

const Notification = () => {
  const hasNotifications = true;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={css.wrap}>
      <IconButton
        onClick={handleClick}
        className={clsx(
          css.notification,
          hasNotifications && css.notificationHasNotif,
          anchorEl && css.notificationOpen
        )}
      >
        <NotificationsIcon />
      </IconButton>

      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {[1, 2].map((item) => (
          <MenuItem key={item} className={css.menuItem}>
            <div className={css.menuItemThumb}>
              <Avatar variant="square" style={{ borderRadius: 2 }}>
                N
              </Avatar>
            </div>
            <div className={css.menuItemText}>
              <div className={css.menuItemTitle}>
                Skullcandy Crusher ANC Pe ...
              </div>
              <div className={css.menuItemDescription}>
                This product has been added to Imported list This product has
                been added to Imported list
              </div>
              <div className={css.menuItemTitleView}>View</div>
            </div>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default Notification;
