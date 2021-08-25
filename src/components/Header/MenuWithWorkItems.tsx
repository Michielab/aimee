import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typograpy from '../Typography/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

import IconButton from '@material-ui/core/Button';
import {
  audiovisual,
  texts,
  communityandcuratorialwork,
  socialMedia,
} from '../Projects/ProjectsData';

import Menu from '../Menu/Menu';
import Link from '../Link/Link';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hovered: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  desktopClass: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  listIcon: {
    minWidth: theme.spacing(4),
  },
  button: {
    // borderRadius: 0,
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      // backgroundColor: 'lightGreen',
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { isDesktop = false, text } = props;
  const [openProjects, toggleOpenProjects] = React.useState(false);
  const [openTexts, toggleOpenTexts] = React.useState(false);
  const [openCommunityWork, toggleOpenCommunityWork] = React.useState(false);
  const [openSocialMedia, toggleOpenSocialMedia] = React.useState(false);

  function handleToggle() {
    toggleOpenProjects(!openProjects);
  }

  function handleToggleTexts() {
    toggleOpenTexts(!openTexts);
  }

  function handleToggleCommunityWork() {
    toggleOpenCommunityWork(!openCommunityWork);
  }

  function handleToggleSocialMedia() {
    toggleOpenSocialMedia(!openSocialMedia);
  }

  function handleClose() {
    toggleOpenProjects(false);
    toggleOpenTexts(false);
    toggleOpenCommunityWork(false);
    toggleOpenSocialMedia(false);
  }

  return (
    <Menu
      // elevation={0}
      handleCloseSubMenu={handleClose}
      renderButton={(handleOpen, open, handleCloseMenu) => {
        return isDesktop ? (
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(e) => {
              !open ? handleOpen(e) : handleCloseMenu();
            }}
            disableTouchRipple={true}
            disableRipple={true}
            classes={{
              root: [classes.button, open ? classes.hovered : ''].join(' '),
            }}
          >
            <Typograpy>{text}</Typograpy>
            <ListItemIcon className={classes.listIcon}>
              <ExpandMoreIcon fontSize="small" color="secondary" />
            </ListItemIcon>
          </Button>
        ) : (
          <IconButton
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={(e) => {
              !open ? handleOpen(e) : handleCloseMenu();
            }}
            disableTouchRipple={true}
            disableRipple={true}
          >
            {open ? (
              <CloseIcon color="secondary" />
            ) : (
              <MenuRoundedIcon color="secondary" />
            )}
          </IconButton>
        );
      }}
      renderMenuItems={(handleClose) => {
        return (
          <div>
            <MenuItem onClick={handleClose} className={classes.desktopClass}>
              <Link noMargin={true} path={'/'} text={'home'} color="primary" />
            </MenuItem>
            <MenuItem onClick={handleToggle}>
              <Typograpy>selection of art works</Typograpy>
              <ListItemIcon>
                <ExpandMoreIcon fontSize="small" color="secondary" />
              </ListItemIcon>
            </MenuItem>
            {openProjects && (
              <Grow in={openProjects}>
                <div>
                  {audiovisual.map((project) => {
                    return (
                      <MenuItem onClick={handleClose}>
                        <Link
                          path={project.link}
                          text={project.title}
                          color="primary"
                        />
                      </MenuItem>
                    );
                  })}
                </div>
              </Grow>
            )}
            <MenuItem onClick={handleToggleCommunityWork}>
              <Typograpy>community and curatorial work </Typograpy>
              <ListItemIcon>
                <ExpandMoreIcon fontSize="small" color="secondary" />
              </ListItemIcon>
            </MenuItem>
            {openCommunityWork && (
              <Grow in={openCommunityWork}>
                <div>
                  {communityandcuratorialwork.map((project) => {
                    return (
                      <MenuItem onClick={handleClose}>
                        <Link
                          path={project.link}
                          text={project.title}
                          color="primary"
                        />
                      </MenuItem>
                    );
                  })}
                </div>
              </Grow>
            )}
            <MenuItem onClick={handleToggleTexts}>
              <Typograpy>written</Typograpy>
              <ListItemIcon>
                <ExpandMoreIcon fontSize="small" color="secondary" />
              </ListItemIcon>
            </MenuItem>
            {openTexts && (
              <Grow in={openTexts}>
                <div>
                  {texts.map((project) => {
                    return (
                      <MenuItem onClick={handleClose}>
                        <Link
                          path={project.link}
                          text={project.title}
                          color="primary"
                        />
                      </MenuItem>
                    );
                  })}
                </div>
              </Grow>
            )}
            <MenuItem onClick={handleClose}>
              <Link
                path={'/projects/recordings'}
                text={'recordings'}
                color="primary"
                external={false}
                noMargin={true}
              />
            </MenuItem>
            <MenuItem
              onClick={handleToggleSocialMedia}
              className={classes.desktopClass}
            >
              <Typograpy>social media</Typograpy>
              <ListItemIcon>
                <ExpandMoreIcon fontSize="small" color="secondary" />
              </ListItemIcon>
            </MenuItem>
            {openSocialMedia && (
              <Grow in={openSocialMedia}>
                <div>
                  {socialMedia.map((project) => {
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
                  })}
                </div>
              </Grow>
            )}
            <MenuItem onClick={handleClose} className={classes.desktopClass}>
              <Link
                path={'/contact'}
                text={'contact'}
                color="textSecondary"
                external={false}
                noMargin={true}
              />
            </MenuItem>
          </div>
        );
      }}
    />
  );
};

export default Header;
