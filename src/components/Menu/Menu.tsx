import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';

import MenuList from '@material-ui/core/MenuList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menu: {
      // backgroundColor: 'red',
      overflow: 'scroll',
      backgroundColor: theme.palette.primary.main,
      border: 'none',
      width: '100%',
      // maxHeight: 'calc(100vh - 68px)',
      '& > *': {
        color: theme.palette.primary.contrastText,
      },
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'center',
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

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

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
        <Popper
          open={open}
          anchorEl={containerRef.current}
          role={undefined}
          transition={false}
          disablePortal={true}
          style={{
            zIndex: 9999,
            width: '100%',
            height: 'calc(100vh - 68px)',
            overflow: 'auto',
            top: '68px',
          }}
          placement={'bottom-start'}
          modifiers={{
            preventOverflow: {
              enabled: true,
              boundariesElement: 'scrollParent',
            },
          }}
          popperOptions={{ positionFixed: false }}
        >
          {({ TransitionProps, placement }) => (
            // <Grow {...TransitionProps}>
            <div>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  classes={{ root: classes.menu }}
                >
                  {renderMenuItems(handleClose)}
                </MenuList>
              </ClickAwayListener>
            </div>
            // </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
