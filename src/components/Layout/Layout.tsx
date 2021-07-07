import * as React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../../theme/Theme';
import '../../styles/global.css';

// import components
import Header from '../Header/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexGrow: 1,
  },
  innerContainer: {
    display: 'flex',
    flexGrow: 6,
    justifyContent: 'center',
  },
  navigation: {
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Header />
      <div className={classes.container}>
        <div className={classes.navigation}>
          {/* <Navigation handleSetCurrentProject={handleSetCurrentProject} /> */}
        </div>
        <div className={classes.innerContainer}>{props.children}</div>
      </div>
    </main>
  );
};

const WrappedLayout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>{props.children}</Layout>
    </ThemeProvider>
  );
};

export default WrappedLayout;
