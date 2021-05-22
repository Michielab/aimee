import * as React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/Theme';
import '../styles/global.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Bla,
} from 'react-router-dom';

// import components
import Header from '../components/Header/Header';
import Link from '../components/Link/Link';
import Navigation from '../components/Nav/Navigation';
import Project from '../components/Project/Project';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../components/Projects/ProjectsData';
import Menu from '../components/Menu/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    // height: '100vh',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  navigation: {
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const [currentProject, setCurrentProject] = useState(0);

  function handleSetCurrentProject(id: number) {
    setCurrentProject(id);
  }

  return (
    <main className={classes.root}>
      <Header />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <div className={classes.navigation}>
          {/* <Navigation handleSetCurrentProject={handleSetCurrentProject} /> */}
        </div>
        <div style={{ display: 'flex', flexGrow: 6, justifyContent: 'center' }}>
          {props.children}
          {/* {projects.map((project, index) => {
            if (currentProject === project.id) {
              return <Project {...project} key={project.id} />;
            }
          })} */}
        </div>
      </div>
    </main>
  );
};

const Index = (props) => {
  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/">
            <Home>{props.children}</Home>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Index;
