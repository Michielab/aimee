import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typograpy from '../Typography/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';

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
  root: {
    position: 'fixed',
    top: 0,
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    minHeight: 68,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99999,
    // [theme.breakpoints.down('sm')]: {
    //   height: 68,
    //   zIndex: 99999,
    // },
    // padding: '16px',
    // mobile code
  },
  button: {
    // textTransform: 'lowercase',
  },
}));

const Header = (props) => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Link path={'/'} text={'Aimée Theriot Ramos'} color="textSecondary" />
      <div>
        <Menu
          handleCloseSubMenu={handleClose}
          renderButton={(handleToggle, open, handleCloseMenu) => {
            return (
              <IconButton
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={(e) => {
                  !open ? handleToggle(e) : handleCloseMenu();
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
                <MenuItem onClick={handleClose}>
                  <Link
                    noMargin={true}
                    path={'/'}
                    text={'Home'}
                    color="primary"
                  />
                </MenuItem>
                <MenuItem onClick={handleToggle}>
                  <Typograpy>Audiovisual</Typograpy>
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
                  <Typograpy>Community and Curatorial work</Typograpy>
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
                  <Typograpy>Text</Typograpy>
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
                <MenuItem onClick={handleToggleSocialMedia}>
                  <Typograpy>Social media</Typograpy>
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
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Header;
