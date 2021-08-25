import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typograpy from '../Typography/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuWithWorkItems from './MenuWithWorkItems';

import {
  audiovisual,
  texts,
  communityandcuratorialwork,
  socialMedia,
} from '../Projects/ProjectsData';

import Menu from '../Menu/Menu';
import Link from '../Link/Link';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hovered: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  menuOpen: {
    // paddingRight: 15,
    // paddingLeft: 15,
  },
  root: {
    position: 'fixed',
    top: 0,
    right: 0,
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    minHeight: 68,
    alignItems: 'center',
    zIndex: 999,
    left: 'auto',
    justifyContent: 'center',
  },
  itemsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    maxWidth: '1200px',
  },
  buttonName: {
    paddingLeft: 0,
  },
  name: {
    flexGrow: 1,
    width: 'unset',
  },
  nameWrapper: {
    marginLeft: theme.spacing(2),
  },
  menuItemsWrapper: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginRight: theme.spacing(3),
  },
  button: {
    // borderRadius: 0,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      // backgroundColor: 'lightGreen',
    },
  },
  recordingButton: {
    paddingRight: 20,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      // backgroundColor: 'lightGreen',
    },
  },

  listIcon: {
    minWidth: theme.spacing(4),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className={[classes.root, menuOpen ? classes.menuOpen : ''].join(' ')}>
      <div className={classes.itemsWrapper}>
        <div className={classes.nameWrapper}>
          <Button classes={{ root: classes.buttonName }}>
            <Link
              path={'/'}
              text={'aimée theriot-ramos'}
              color="textSecondary"
              noMargin={true}
              className={classes.name}
            />
          </Button>
        </div>
        <div className={classes.menuItemsWrapper}>
          <MenuWithWorkItems isDesktop={true} />
          {/* <Menu
            setMenuOpen={setMenuOpen}
            renderButton={(handleOpen, open, handleCloseMenu) => {
              return (
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(e) => {
                    !open ? handleOpen(e) : handleCloseMenu();
                  }}
                  disableTouchRipple={true}
                  disableRipple={true}
                  classes={{
                    root: [classes.button, open ? classes.hovered : ''].join(
                      ' '
                    ),
                  }}
                >
                  <Typograpy>selection of art works</Typograpy>
                  <ListItemIcon className={classes.listIcon}>
                    <ExpandMoreIcon fontSize="small" color="secondary" />
                  </ListItemIcon>
                </Button>
              );
            }}
            renderMenuItems={(handleClose) => {
              return audiovisual.map((project) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <Link
                      path={project.link}
                      text={project.title}
                      color="primary"
                    />
                  </MenuItem>
                );
              });
            }}
          />
          <Menu
            renderButton={(handleOpen, open, handleCloseMenu) => {
              return (
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(e) => {
                    !open ? handleOpen(e) : handleCloseMenu();
                  }}
                  disableTouchRipple={true}
                  disableRipple={true}
                  classes={{ root: classes.button }}
                >
                  <Typograpy>community and curatorial work </Typograpy>
                  <ListItemIcon className={classes.listIcon}>
                    <ExpandMoreIcon fontSize="small" color="secondary" />
                  </ListItemIcon>
                </Button>
              );
            }}
            renderMenuItems={(handleClose) => {
              return communityandcuratorialwork.map((project) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <Link
                      path={project.link}
                      text={project.title}
                      color="primary"
                    />
                  </MenuItem>
                );
              });
            }}
          />
          <Menu
            renderButton={(handleOpen, open, handleCloseMenu) => {
              return (
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(e) => {
                    !open ? handleOpen(e) : handleCloseMenu();
                  }}
                  disableTouchRipple={true}
                  disableRipple={true}
                  classes={{ root: classes.button }}
                >
                  <Typograpy>written</Typograpy>
                  <ListItemIcon className={classes.listIcon}>
                    <ExpandMoreIcon fontSize="small" color="secondary" />
                  </ListItemIcon>
                </Button>
              );
            }}
            renderMenuItems={(handleClose) => {
              return texts.map((project) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <Link
                      path={project.link}
                      text={project.title}
                      color="primary"
                    />
                  </MenuItem>
                );
              });
            }}
          />
          <div style={{ display: 'flex' }}>
            <Button classes={{ root: classes.recordingButton }}>
              <Link
                path={'/projects/recordings'}
                text={'recordings'}
                color="primary"
                external={false}
                noMargin={true}
              />
            </Button>
          </div> */}
          <Menu
            renderButton={(handleOpen, open, handleCloseMenu) => {
              return (
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(e) => {
                    !open ? handleOpen(e) : handleCloseMenu();
                  }}
                  disableTouchRipple={true}
                  disableRipple={true}
                  classes={{ root: classes.button }}
                >
                  <Typograpy>social media</Typograpy>
                  <ListItemIcon className={classes.listIcon}>
                    <ExpandMoreIcon fontSize="small" color="secondary" />
                  </ListItemIcon>
                </Button>
              );
            }}
            renderMenuItems={(handleClose) => {
              return socialMedia.map((project) => {
                return (
                  <MenuItem onClick={handleClose}>
                    <Link
                      path={project.link}
                      text={project.title}
                      color="primary"
                      external={true}
                    />
                  </MenuItem>
                );
              });
            }}
          />
          <div style={{ display: 'flex' }}>
            <Button classes={{ root: classes.recordingButton }}>
              <Link
                path={'/about'}
                text={'about'}
                color="primary"
                external={false}
                noMargin={true}
              />
            </Button>
          </div>
          <div style={{ display: 'flex' }}>
            <Button classes={{ root: classes.button }}>
              <Link
                path={'/contact'}
                text={'contact'}
                color="primary"
                external={false}
                noMargin={true}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
