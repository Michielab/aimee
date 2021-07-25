import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menu: {
      // backgroundColor: theme.palette.primary.main,
      pointerEvents: 'auto',
      // backgroundColor: 'rgba(0, 0, 0, 0.04)',

      top: '52px !important', // 52

      [theme.breakpoints.down('xs')]: {
        left: '0px !important',
        top: '68px !important',
        width: '100%',
        maxWidth: '100%',
        border: 'none',
      },
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    popOverRoot: {
      pointerEvents: 'none',
      zIndex: 9999,
    },
  })
);

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {
    renderMenuItems,
    renderButton,
    handleCloseSubMenu = () => null,
    setMenuOpen = () => null,
  } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleCloseSubMenu();
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <div
        onMouseEnter={(e) => handleClick(e)}
        onMouseLeave={() => handleMouseLeave()}
      >
        {renderButton &&
          renderButton(handleClick, Boolean(anchorEl), handleClose)}
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          elevation={2}
          classes={{ paper: classes.menu }}
          onClose={handleClose}
          MenuListProps={{ autoFocusItem: false }}
          PaperProps={{
            square: false,
          }}
          PopoverClasses={{ root: classes.popOverRoot }}
          // anchorOrigin={{
          //   vertical: 'bottom',
          //   horizontal: 'left',
          // }}
        >
          {renderMenuItems && renderMenuItems(handleClose)}
        </Menu>
      </div>
    </div>
  );
}
