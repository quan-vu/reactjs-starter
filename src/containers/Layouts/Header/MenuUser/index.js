import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import { logout } from '../../../../api/auth';
import { useHistory } from 'react-router-dom';
import { getPath } from '../../../../routes';

// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import css from './index.module.scss';

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
    {...props}
    className={css.menuList}
  />
));

const MenuUser = () => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose(null);
    logout();
    history.push(getPath('ROOT'));
  };

  return (
    <div>
      <Button className={css.menuBtn} size="small" onClick={handleClick}>
        <Avatar
          alt="Avatar User"
          src="https://via.placeholder.com/150x150"
          className={css.menuBtnAvatar}
        />
      </Button>

      <StyledMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <div style={{ padding: '4px 16px' }}>
          <Divider light />
        </div> */}

        <MenuItem
          onClick={handleLogout}
          className={clsx(css.menuItem, css.menuItemLast)}
        >
          <div className={css.menuItemTextTitle}>Log out</div>

          <ListItemSecondaryAction
            className={clsx(css.endIconWrap, css.endIconLogout)}
          >
            <ExitToAppIcon />
          </ListItemSecondaryAction>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default MenuUser;

// const IconHome = (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M15.8335 17.3333H4.16683C3.70659 17.3333 3.3335 16.9602 3.3335 16.5V8.46413C3.34641 8.25992 3.4332 8.06738 3.57766 7.92246L9.411 2.08913C9.5673 1.93265 9.7794 1.84473 10.0006 1.84473C10.2218 1.84473 10.4339 1.93265 10.5902 2.08913L16.4235 7.92246C16.5799 8.07853 16.6676 8.29065 16.6668 8.51163V16.5C16.6668 16.9602 16.2937 17.3333 15.8335 17.3333ZM10.0002 3.85663L5.00016 8.85663V15.6666H15.0002V8.85663L10.0002 3.85663ZM10.0002 13.9991C9.82683 13.845 9.631 13.6841 9.4235 13.5141L9.38433 13.4825C8.42016 12.6958 7.21766 11.7166 7.21766 10.4991C7.21779 10.0958 7.38038 9.70943 7.66873 9.42736C7.95708 9.14528 8.34688 8.99122 8.75016 8.99996C9.22699 8.99868 9.68172 9.20088 10.0002 9.5558C10.3187 9.20097 10.7734 8.99879 11.2502 8.99996C11.653 8.99213 12.0421 9.1467 12.3297 9.42886C12.6174 9.71102 12.7794 10.097 12.7793 10.5C12.7793 11.7216 11.5693 12.7075 10.5977 13.5L10.5502 13.5391C10.3527 13.7008 10.166 13.8533 9.99933 14.0008L10.0002 13.9991Z"
//       fill="#E9162B"
//     />
//   </svg>
// );
