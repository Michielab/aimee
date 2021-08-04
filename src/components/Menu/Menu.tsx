import React from 'react';
import Menu, { MenuProps } from '@material-ui/core/Menu';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface MenuListProps {
  elevation?: number;
  renderMenuItems?: Function;
  renderButton?: Function;
  handleCloseSubMenu?: Function;
  setMenuOpen?: Function;
}

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

      [theme.breakpoints.down('md')]: {
        left: '0px !important',
        top: '52px !important',
        width: '100%',
        maxWidth: '100%',
        // border: 'none',
      },
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    popOverRoot: {
      pointerEvents: 'none',
      zIndex: `${99999} !important`,
    },
  })
);

export default function MenuListComposition(props: MenuListProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const {
    renderMenuItems,
    renderButton,
    handleCloseSubMenu = () => null,
    setMenuOpen = () => null,
    elevation = 2,
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
          elevation={elevation}
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
