import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';

import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menu: {
      backgroundColor: theme.palette.primary.main,
      border: 'none',
      [theme.breakpoints.down('xs')]: {
        left: '0px !important',
        top: '68px !important',
        width: '100%',
        maxWidth: '100%',
      },
    },
    paper: {
      marginRight: theme.spacing(2),
      backgroundColor: theme.palette.primary.main,
    },
  })
);

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { containerRef, renderMenuItems, renderButton } = props;

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        {renderButton(anchorRef, handleToggle, open)}
        <Menu
          open={open}
          elevation={0}
          classes={{ paper: classes.menu }}
          anchorEl={containerRef}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {renderMenuItems(handleClose)}
        </Menu>
      </div>
    </div>
  );
}
