import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '../Link/Link';
import { projects } from '../Projects/ProjectsData';
import Typography from '../Typography/Typography';

import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   zIndex: 12,
      //   left: 40,
      //   top: 156,
      //   position: 'fixed',
      //   width: 250,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  })
);

export default function ResponsiveDrawer(props) {
  const { handleSetCurrentProject } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <List>
        {projects.map((project) => {
          return (
            <ListItem
              button={true}
              onClick={() => handleSetCurrentProject(project.id)}
            >
              <Typography text={project.name} />
            </ListItem>
          );
          // <Link path={project.link} text={text} />
        })}
        {/* {['Lenin', 'Project2', 'Project3', 'Project3'].map((text, index) => (
          <Link path={text} text={text} />
        ))} */}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <Link path={text} text={text} />
        ))}
      </List> */}
    </div>
  );
}
