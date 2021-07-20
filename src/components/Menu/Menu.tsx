import React from 'react';
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { renderMenuItems, renderButton } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (handleClose) => {
    setAnchorEl(null);
    handleClose();
  };

  return (
    <div className={classes.root}>
      <div>
        {renderButton &&
          renderButton(anchorEl, handleClick, Boolean(anchorEl), handleClose)}
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          elevation={0}
          classes={{ paper: classes.menu }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {renderMenuItems && renderMenuItems(handleClose)}
        </Menu>
      </div>
    </div>
  );
}
