import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typograpy from '../Typography/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/Button';
import { projects, texts } from '../Projects/ProjectsData';

import Menu from '../Menu/Menu';
import Link from '../Link/Link';
import { Grow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: 100,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      height: 68,
      justifyContent: 'space-between',
    },
    // padding: '16px',
    // mobile code
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [openProjects, toggleOpenProjects] = React.useState(false);
  const [openTexts, toggleOpenTexts] = React.useState(false);

  function handleToggle() {
    toggleOpenProjects(!openProjects);
  }

  function handleToggleTexts() {
    toggleOpenTexts(!openTexts);
  }

  function handleClose() {
    toggleOpenProjects(false);
    toggleOpenTexts(false);
  }

  const menuRef = React.useRef<HTMLLIElement>(null);

  return (
    <div ref={anchorRef} className={classes.root}>
      <Link path={'/'} text={'Aimée Theriot Ramos'} color="textSecondary" />
      <Menu
        containerRef={anchorRef}
        renderButton={(buttonRef, handleToggle, open) => {
          return (
            <IconButton
              ref={buttonRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={() => {
                handleToggle(), handleClose();
              }}
              disableTouchRipple={true}
              disableRipple={true}
            >
              <MenuRoundedIcon color="secondary" />
            </IconButton>
          );
        }}
        renderMenuItems={(handleClose) => {
          return (
            <>
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleToggle}>
                <Typograpy text="Projects" />
                <ListItemIcon>
                  <ExpandMoreIcon fontSize="small" color="secondary" />
                </ListItemIcon>
              </MenuItem>
              {openProjects && (
                <Grow in={openProjects}>
                  <div>
                    {projects.map((project) => {
                      return (
                        <MenuItem onClick={handleClose}>
                          <Link
                            path={project.link}
                            text={project.name}
                            color="primary"
                          />
                        </MenuItem>
                      );
                    })}
                  </div>
                </Grow>
              )}
              <MenuItem onClick={handleToggleTexts}>
                <Typograpy text="Texts" />
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
                            text={project.name}
                            color="primary"
                          />
                        </MenuItem>
                      );
                    })}
                  </div>
                </Grow>
              )}
              <MenuItem onClick={handleClose}>Portfolio</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </>
          );
        }}
      />
    </div>
  );
};

export default Header;
